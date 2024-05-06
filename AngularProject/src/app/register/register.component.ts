import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService : UserService, private router : Router) {}

  formData : User = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    ConfirmPassword : ''
  }

  addNewUser (){
    this.userService.addUser(this.formData).subscribe({
      next:(data) => {
        this.router.navigate(['']);
      }, 
      error:(err) => {
        console.log(err)
      }
    })
  }

}
