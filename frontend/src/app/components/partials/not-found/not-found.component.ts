import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';



@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {


  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found !";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";

  constructor(private _snackBar: MatSnackBar) { }



  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    // this._snackBar.open(
    //   'ddddddddddddddddd'!,
    //   'dismiss', {
    //   duration: 3000
    // });
  }

}
