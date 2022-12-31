import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../public/models/Cart';
import { CartItem } from '../public/models/CartItem';
import { Food } from '../public/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // getting the saved cart from local storage or if does not exist a new instant of Cart
  // ** notice that from now on every time we are changing the cart we need to update the cart in local storage too 

  private cart: Cart = this.getCartFromLocalStorage();

  // 
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }


  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);

    if (cartItem)
      return

    this.cart.items.push(new CartItem(food));
    //**
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    //**
    this.setCartToLocalStorage();

  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    //**
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();

    //**
    this.setCartToLocalStorage();
  }


  // we are sending an observable objcet to prevent any changes to the cart outside the CartService class
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  // to send a latest version of cart object to the checkout components
  getCart(): Cart {

    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {

    // reduce function here uses callback functions to go throw all the items and selects the specified item property and work with its value 
    // in this case we went throw the price and quantity to calculate the total price and quantity
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    // this is to notify all others who are having access or using the observable object that we have change it and we will change the value of it
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
