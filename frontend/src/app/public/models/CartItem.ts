import { Food } from "./Food";

export class CartItem {
    // here we could declare a property food and set it every time 
    //but in this way we say that this class has a Food instance and its public to be used by other using this object
    constructor(public food: Food) {
    }
    quantity: number = 1;
    price: number = this.food.price;
}