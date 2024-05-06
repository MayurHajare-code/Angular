import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/User";

  getUser():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  addUser(data : User ) {
    return this.http.post(this.url , data);
  }

}
