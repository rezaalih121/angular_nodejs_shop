import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;

  // using form builder to create form in angular 
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // all the impute and their validators are going to be defined here for formBuilder to create the form for us
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // to access the formbuilder's controls like email we have to use loginForm.controls.email 
  // to simplify this we can create a function to do the repeated (loginForm.controls.) part for us like below
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    this.showAlert("Email : " + this.fc.email.value + " Password : " + this.fc.password.value);

  }

  showAlert(message: string) {
    this._snackBar.open(
      message,
      'dismiss', {
      duration: 3000
    });
  }


}
