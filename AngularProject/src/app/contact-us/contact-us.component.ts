import { Component } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private contact : ContactService) {}

  contactData : Contact = {
    name : '',
    email : '',
    message : ''
  }

  sendMessage() {
    return this.contact.addContactData(this.contactData).subscribe({
      next :(data) =>{
        alert("message send successfully.");
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
