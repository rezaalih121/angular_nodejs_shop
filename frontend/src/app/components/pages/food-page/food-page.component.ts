import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/public/models/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {

  food!: Food;
  // again we made the carService private to be able to use it throwout the class not just inside the constructor
  constructor(activateRoute: ActivatedRoute, foodService: FoodService, private cartService: CartService, private router: Router) {

    activateRoute.params.subscribe((params) => {
      // Here first we need to subscribe to the observable serverFood then set the local food variable with it
      if (params.id) {
        foodService.getFoodById(params.id).subscribe(serverFood => {
          this.food = serverFood;
        });
      }

    })

  }

  addToCart() {
    this.cartService.addToCart(this.food);
    // but just adding to the cart is not enough we want to redirect user to the cart page too for this we need to inject the router object in constructor
    this.router.navigateByUrl('/cart-page');

  }
}
