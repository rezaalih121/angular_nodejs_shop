import { Component } from '@angular/core';
import { Tag } from 'src/app/public/models/Tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tags?: Tag[];

  constructor(foodservice: FoodService) {

    foodservice.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }


}
