import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/public/models/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  // we need to inject activatedReout to access the routing info
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    // this is use to convert the Foods array to observable to be used by httpClient
    let foodsObservable: Observable<Food[]>;

    // any time a parameter is changing this function will be called 
    activatedRoute.params.subscribe((params) => {

      //you can remove this error in config.json to use the indexed properties just like other properties  << Property 'searchTerm' comes from an index signature, so it must be accessed with ['searchTerm'].ts(4111) >>
      //if you do not want to change the config.json you must use it like this 
      //if (params.['searchTerm']) {
      if (params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservable = foodService.getAll();

      // now is time to subscribe to the observable variable to set it to local variable every time it changes 
      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })

    })

  }
  ngOnInit() {
  }
}
