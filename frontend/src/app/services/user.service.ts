import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../public/constants/urls';
import { IUserLogin } from '../public/interfaces/IUserLogin';
import { IUserRegister } from '../public/interfaces/IUserRegister';
import { User } from '../public/models/User';

// defined here to be used everywhere
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //here user subject allows read and write but we don't want that so we need to convert it to just observable 
  // we are getting user's info from localStorage if available if not we get a new User instance
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  public userObservable: Observable<User>



  constructor(private http: HttpClient, private toastrService: ToastrService) {
    // here we actually converted userSubject to observable (read only version) and made it public to be used by other components
    this.userObservable = this.userSubject.asObservable();
  }


  // here we are using an Interface instead of user object the reason is that we don't want anyone create an instance of it

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {

          this.setuserToLocalStorage(user);

          this.userSubject.next(user);

          // there is a global setting that must be done to app.module.ts take a look a it
          // https://ngx-toastr.vercel.app here you can test all the options to create a custom design for your message
          this.toastrService.success(
            `Welcome to Food shop ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }

      })
    );
  }


  register(userRegister: IUserRegister): Observable<User> {

    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap(
        {
          // here if user exists getting it by next we save the user data in Localstorage and the notify everyone that user status changed using userSubject
          next: (user) => {
            this.setuserToLocalStorage(user);
            this.userSubject.next(user);
            this.toastrService.success(
              `Welcome to the FoodShop ${user.name}`,
              'Registered successfully'
            )

          },
          error: (errorResponce) => {
            this.toastrService.error(
              errorResponce.error,
              'Register Failed'
            )
          }
        }
      )
    );
  }

  logOut() {
    this.userSubject.next(new User);
    localStorage.removeItem(USER_KEY);

    window.location.reload();
  }

  // saving the user info after login in the storage to use throwout the site while user is  logged in

  private setuserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;

    return new User();
  }

}
