import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../public/constants/urls';
import { Food } from '../public/models/Food';
import { Tag } from '../public/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  // notice that http client only accepts observable objects so we need to convert all the objects here observable to be able to work with http client

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  };

  getAllFoodsBySearchTerm(searchTerm: string) {

    // before http => return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag == 'All' ? this.getAll() : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<Food> {
    // ?? means if it was null return a new instant of food
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}
