import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public email = 'hemanth@choppala.com';
  public phone = '1 (404)704-7346';
  public address = 'Atlanta Metropolitan Area<br />USA';

  constructor(private _dialog: MatDialog) { }

}
