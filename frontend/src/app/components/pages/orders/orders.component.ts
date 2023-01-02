import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/public/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: Order[] = [];



  constructor(userService: UserService, orderService: OrderService, activatedRoute: ActivatedRoute) {

    let ordersObservable: Observable<Order[]>;

    activatedRoute.params.subscribe((params) => {

      ordersObservable = orderService.getOrdersListForCurrentUser();

      ordersObservable.subscribe((userOrders) => {

        this.orders = userOrders;


      })
    })
  }

}
