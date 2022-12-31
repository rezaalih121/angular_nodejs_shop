import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading!: boolean;

  constructor(loadingService: LoadingService) {
    // by subscribing we make sure that isLoading state of observable loading is always the same as isLoading here they are sync all the time
    loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

  }

}
