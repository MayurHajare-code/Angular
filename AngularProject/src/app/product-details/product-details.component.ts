import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  id : number;
  product : Product;
  url = "http://localhost:3000/";
  constructor(
    private productService : ProductServiceService,
    private router : Router,
    private route : ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(this.id);
    this.id && this.productService.
    getProductById(this.id).
    subscribe(idData => {
     // console.log(idData);
      this.product = idData;
    })
  }


}
