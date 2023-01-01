import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/public/models/Order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {

  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router,
    private toastService: ToastrService) {

    // here we dont need an observable cart just the latest instance of it 
    //so we created a new function to get it from the cartSubject in CartService got take a look
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    // same as the getCart we need to create new function to get the latest value of current user
    let { name, address } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
    })
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    if (!this.order.addressLatLng) {
      this.toastService.warning('Please select your location on the map', 'Location');
      return;
    }
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    this.orderService.create(this.order).subscribe(({
      next: () => {
        console.log(this.order);

        this.router.navigateByUrl('/payment');
      },
      error: (errorRsponse) => {
        console.log(errorRsponse);

        this.toastService.error(errorRsponse, 'Cart');
      }
    }))

  }



}
