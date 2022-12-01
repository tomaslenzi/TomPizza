import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TompizzaAboutComponent } from './tompizza-about/tompizza-about.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from "@angular/common/http";
import { TompizzaDrinksComponent } from './tompizza-drinks/tompizza-drinks.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TompizzaAboutComponent,
    CartComponent,
    InputIntegerComponent,
    TompizzaDrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
