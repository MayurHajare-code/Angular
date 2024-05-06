import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/";  // json-server url
 // url : string = "http://localhost:8080/";  //spring boot url

//  getAllProducts:Product[]; 

  getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.url + 'products' ); // json-server url
    //  return this.http.get<Product[]>(this.url + 'getProductData' ); //spring boot url
  }

  getProductById(id : number) {
    return this.http.get<Product>(this.url + `products/${id}`); // json-server url
  // return this.http.get<Product[]>(this.url + `getProductData/${id}` ); //spring boot url
  }
}
