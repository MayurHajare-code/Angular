import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../classes/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url : string = "http://localhost:3000/contact";

  constructor(private http: HttpClient) { }

  
  addContactData(data : Contact) {
    return this.http.post(this.url , data);
  }
}
