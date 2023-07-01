
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/public/models/Order';

// paypal script is providing window.paypal in javascript but we want it to be accessible in this component so we declare a variable here 
declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.scss']
})
export class PaypalButtonComponent {

  @Input()
  order!: Order;
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    // from here we are using javascript library of PayPal to create a paypal button
    // the script address with paypal id has to be added on the end of index.html take a look 
    // by the way you must create your own paypal account then developer account and a sandbox test account to test everything works .
    const self = this;
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'CAD',
                  value: self.order.totalPrice,
                },
              },
            ],
          });
        },

        onApprove: async (data: any, actions: any) => {
          const payment = await actions.order.capture();
          this.order.paymentId = payment.id;
          self.orderService.pay(this.order).subscribe(
            {
              next: (orderId) => {
                this.cartService.clearCart();
                this.router.navigateByUrl('/track/' + orderId);
                this.toastrService.success(
                  'Payment Saved Successfully',
                  'Success'
                );
              },
              error: (error) => {
                this.toastrService.error('Payment Save Failed', 'Error');
              }
            }
          );
        },

        onError: (err: any) => {
          this.toastrService.error('Payment Failed', 'Error');
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);

  }

}
