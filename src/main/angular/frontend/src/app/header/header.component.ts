import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public email = 'hemanth@choppala.com';
  public phone = '1 (404)704-7346';
  public address = 'Atlanta Metropolitan Area<br />USA';

  @Output() link: EventEmitter<any> = new EventEmitter<any>();

  public on_click(eve: string) {
    this.link.emit(eve);
  }
}
