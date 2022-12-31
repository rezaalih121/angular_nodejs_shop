import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // by creating a loading behaviorSuject all other components will notify and have access to the state of loading

  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor() { }



  // any one whose listening to this will be notified that the loading is true and the opposite
  showLoading() {
    this.isLoadingSubject.next(true)
  }

  hideLoading() {
    this.isLoadingSubject.next(false)
  }

  get isLoading() {
    // this make sure that nobody outside this class can not change the state of loading
    // and has to use the instance of it and call the specified function to change the state
    return this.isLoadingSubject.asObservable();
  }
}
