import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl('')
  });

  

  submitForm() {
    console.log(this.contactForm.value);
    
  //   if(this.senderNameControl.dirty) {
  //     alert('you changed the name field')
  //   }
   }
}
