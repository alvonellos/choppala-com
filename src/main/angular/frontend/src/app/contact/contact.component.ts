import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../utilities/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public email = 'hemanth@choppala.com';
  public phone = '1 (404)704-7346';
  public address = 'Atlanta Metropolitan Area<br />USA';

  public contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  constructor(private _dialog: MatDialog, private _contact_service: ContactService) { }

  public on_submit(contactForm: NgForm) {
    if (contactForm.form.valid) {
      this._contact_service.post(contactForm.value).subscribe((r) => {

      }, e => {
        console.log(e);
      });
    }
  }

}
