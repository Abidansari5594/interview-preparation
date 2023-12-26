import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  messageSent: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      message: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    // Perform any necessary form submission logic here
    // For demonstration purposes, we'll just set messageSent to true
    this.messageSent = true;

    // Reset the form after submission
    this.contactForm.reset();

    // Add the "sent" class to the body
    document.body.classList.add('sent');
    
    
  }
}
