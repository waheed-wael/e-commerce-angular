import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/SharedModule';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [ProductsDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AllProductsComponent,
    BrowserModule,
    AppModule
    
    
  ],
  exports : [
    AppModule
  ]
})
export class ProductsModule {}
