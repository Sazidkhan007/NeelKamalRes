import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  //to load home page
  {path: 'home', component:HomeComponent},
  {path: 'order', component:OrderComponent},
  {path: 'menu', component:MenuComponent},
  // {path: 'reservation', component:HomeComponent},
  {path: 'drinks', component:DrinksComponent},
  {path: 'booking', component:BookingComponent},
  {path: 'contact', component:ContactUSComponent},


  //handlers for empty path and catch all
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
