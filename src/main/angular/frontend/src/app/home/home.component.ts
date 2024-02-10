import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Output() link: EventEmitter<any> = new EventEmitter<any>();
  public slide_titles: string[] = [
    'Developer',
    'Designer',
    'Engineer'
  ]

  public on_click(eve: string) {
    this.link.emit(eve);
  }

}
