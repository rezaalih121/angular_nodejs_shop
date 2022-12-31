import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation(): Observable<LatLngLiteral> {
    return new Observable((observer) => {

      // checking if navigator option is on or is available for the browser if not just return and do nothing
      if (!navigator.geolocation) return;
      // navigator is an javascript object and using it you get the current latitude and longitude of the user 
      return navigator.geolocation.getCurrentPosition(
        (pos) => {
          observer.next({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
        },
        (error) => {
          observer.error(error);
        }
      )
    })
  }
}
