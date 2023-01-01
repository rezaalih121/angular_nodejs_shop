import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL, ORDER_TRACK_URL } from '../public/constants/urls';
import { Order } from '../public/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  create(order: Order) {
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser(): Observable<Order> {

    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);

  }

  pay(order: Order): Observable<string> {

    return this.http.post<string>(ORDER_PAY_URL, order);

  }

  trackOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(ORDER_TRACK_URL + id);
  }

  constructor(private http: HttpClient) {

  }
}
