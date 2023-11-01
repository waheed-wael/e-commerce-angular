import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartsComponent } from './services/carts/carts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    CartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ]
})
export class CartsModule { }
