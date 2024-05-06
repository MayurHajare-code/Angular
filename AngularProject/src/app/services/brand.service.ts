import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../classes/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/";  // json-server url

  getBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.url + 'brands' ); // json-server url
 
}

}
