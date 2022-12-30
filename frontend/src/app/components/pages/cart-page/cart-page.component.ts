import { Component } from '@angular/core';
import { Cart } from 'src/app/public/models/Cart';
import { CartItem } from 'src/app/public/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  cart!: Cart;
  maxOrderQuantity: number = 21;

  constructor(private cartService: CartService) {

    // every time that observable cart changed update the cart property here 
    // by subscribing on observable cart object we are using the flesh function to update the cart when the observable changed  
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string, from: string) {
    const quantity = parseInt(quantityInString);
    if (from == 'select' && quantity <= this.maxOrderQuantity)
      this.cartService.changeQuantity(cartItem.food.id, quantity);
    if (from == 'add' && quantity < this.maxOrderQuantity)
      this.cartService.changeQuantity(cartItem.food.id, quantity + 1);
    if (from == 'remove' && quantity <= this.maxOrderQuantity && quantity != 0)
      this.cartService.changeQuantity(cartItem.food.id, quantity - 1);
  }

  createSelectList() {
    var arr = [];
    for (let i = 1; i <= this.maxOrderQuantity; i++) {
      arr[i] = "";
    }
    return arr;
  }
}
