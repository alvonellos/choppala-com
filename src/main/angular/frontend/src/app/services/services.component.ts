import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  @Output() link: EventEmitter<any> = new EventEmitter<any>();

  public on_click(eve: string) {
    this.link.emit(eve);
  }
}
