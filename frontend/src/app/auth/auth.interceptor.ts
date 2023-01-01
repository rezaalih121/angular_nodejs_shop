import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const user = this.userService.currentUser;

    if (user.token) {

      // this make a new object from the current request object we don't want to change the request we create a new object copy and changing some fields
      request = request.clone({
        setHeaders: { access_token: user.token }
      })
    }

    return next.handle(request);
  }
}
