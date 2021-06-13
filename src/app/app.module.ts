import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DrinksComponent } from './drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookingComponent,
    ContactUSComponent,
    HomeComponent,
    OrderComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
