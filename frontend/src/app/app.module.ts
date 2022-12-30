import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
