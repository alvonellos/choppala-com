import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('home') home!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  public on_scroll(link: string) {
    if (link === 'home') {
      this.home.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'portfolio') {
      this.portfolio.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'services') {
      this.services.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'about') {
      this.about.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else {
      this.contact.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    }
  }

}
