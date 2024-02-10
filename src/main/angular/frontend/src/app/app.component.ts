import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router, Event } from '@angular/router';
import { takeWhile, tap, timer } from 'rxjs';
import { StartUpComponent } from './start-up/start-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public overall_opacity = 100;

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    // this._dialog.open(StartUpComponent);
    // timer(1000, 20)
    //   .pipe(takeWhile(() => this.overall_opacity < 100), tap(() => this.overall_opacity++))
    //   .subscribe(() => {
    //   });
  }

  @ViewChild('home') home!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;

  public on_scroll(link: string) {
    if (link === 'home') {
      this.home.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'portfolio') {
      this.portfolio.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'services') {
      this.services.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'about') {
      this.about.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else if (link === 'skills') {
      this.skills.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    } else {
      this.contact.nativeElement.scrollIntoView({ behaviour: 'smooth' });
    }
  }

}
