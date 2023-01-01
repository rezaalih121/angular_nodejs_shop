import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/public/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.scss']
})
export class OrderTrackPageComponent {

  order!: Order;

  constructor(private activateRoute: ActivatedRoute, private orderService: OrderService) {

    const params = activateRoute.snapshot.params;

    if (!params.orderId) return;

    orderService.trackOrderById(params.orderId).subscribe(order => {
      this.order = order;
    })

  }


}
