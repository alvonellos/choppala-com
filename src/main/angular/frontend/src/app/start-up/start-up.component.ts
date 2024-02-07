import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { fadeInDownBig, fadeOutUpBig } from 'ng-animate';
import { takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.scss',
  animations: [
    trigger('startUpIn', [
      transition(':enter', [useAnimation(fadeInDownBig, {
        params: { timing: 2 }
      })]),
      transition(':leave', [useAnimation(fadeOutUpBig, {
        params: { timing: 2 }
      })])
    ]),
  ]
})
export class StartUpComponent implements OnInit, OnDestroy {

  public is_show = false;
  public loader = 0;

  constructor(private _dialog_ref: MatDialogRef<StartUpComponent>) { }

  ngOnDestroy(): void {
    this.is_show = false;
  }

  ngOnInit(): void {
    this.is_show = true;
    setTimeout(() => {
      timer(1000, 8)
        .pipe(takeWhile(() => this.loader < 100), tap(() => this.loader++))
        .subscribe(() => {
          if (this.loader >= 100) {
            this.is_show = false;
            setTimeout(() => {
              this._dialog_ref.close();
            }, 2000);
          }
        });
    }, 1000);
  }

}
