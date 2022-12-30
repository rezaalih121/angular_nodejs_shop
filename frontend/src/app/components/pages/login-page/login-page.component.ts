import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  // to return the user to the url that he was before login
  returnUrl = '';

  // using form builder to create form in angular 
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,
    private userService: UserService, private activatiedRoutes: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // all the impute and their validators are going to be defined here for formBuilder to create the form for us
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });


    // using snapshot we get the last url and queryParms is like the prams after url  Ex : // ?returnUrl=/checkout
    this.returnUrl = this.activatiedRoutes.snapshot.queryParams.returnUrl;

  }

  // to access the formbuilder's controls like email we have to use loginForm.controls.email 
  // to simplify this we can create a function to do the repeated (loginForm.controls.) part for us like below
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    this.userService.login({ email: this.fc.email.value, password: this.fc.password.value }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    })

  }

  showAlert(message: string) {
    this._snackBar.open(
      message,
      'dismiss', {
      duration: 3000
    });
  }


}
