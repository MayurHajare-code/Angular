import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //username:string;

  formData : any = {
    Username : '',
    Password : '',
  }

  constructor(private userService : UserService, 
    private router :Router, 
    private storage : LocalStorageService) {}


  login(){
    this.userService.getUser().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.formData.Username && a.password === this.formData.Password 
      });
      if(user){
        /*
        //this.storage.store('username', this.formData.username);

        // Set the username in session
        this.storage.store('username', 'John');
        // Get the username from session
        this.username = this.storage.retrieve('username');
        */

        alert('Login Succesful');
        this.router.navigate(['home']);
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}
