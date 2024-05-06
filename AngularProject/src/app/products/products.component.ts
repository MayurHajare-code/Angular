import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Product[] = [];
  url = "http://localhost:3000/";
  constructor(public productService : ProductServiceService) {}

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => this.products = data );
  }
}
