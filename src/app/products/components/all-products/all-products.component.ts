import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  
  
 
})
export class AllProductsComponent implements OnInit {
   
  
  products: any[] = [];
  Categories: any;
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getALLproducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products);
    },error => {
      alert(error)
    })
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      this.Categories = res;
      console.log(this.Categories);
    },error => {
      alert(error)
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    (value =="all") ? this.getProducts() : this.getProductsCategory(value)
      

   
  
  }
  getProductsCategory(keyword:string){
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res
    })
  }

}
 
