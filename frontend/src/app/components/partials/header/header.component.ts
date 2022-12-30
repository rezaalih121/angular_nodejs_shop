import { Component } from '@angular/core';
import { User } from 'src/app/public/models/User';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartQuantity = 0
  user!: User;
  constructor(cartService: CartService, private userService: UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    // with this subscription every time that we set user in the userService we set the user value here too 
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logOut() {
    this.userService.logOut();
  }

  isAuth() {
    return this.user.token;
  }

}
