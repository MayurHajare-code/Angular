import { Component, Inject } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products = [];
  brands = [];
  url = "http://localhost:3000/";
  constructor(public productService : ProductServiceService,
     public brandService : BrandService) {}

  ngOnInit() {
     this.productService.getProducts()
      .subscribe( data => this.products = data);
      this.brandService.getBrands()
      .subscribe(data => this.brands = data)
  }


}
