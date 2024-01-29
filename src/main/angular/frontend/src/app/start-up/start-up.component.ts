import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { fadeInDownBig, fadeOutUpBig } from 'ng-animate';
import { takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.scss',
  animations: [
    trigger('startUpOut', [
      transition(':enter', [useAnimation(fadeInDownBig, {
        params: { timing: 2 }
      })]),
      transition(':leave', [useAnimation(fadeOutUpBig, {
        params: { timing: 2 }
      })])
    ])
  ]
})
export class StartUpComponent implements OnInit {

  public loader = 0;

  constructor(private _dialog_ref: MatDialogRef<StartUpComponent>) { }

  ngOnInit(): void {
    setTimeout(() => {
      timer(1000, 20)
        .pipe(takeWhile(() => this.loader < 100), tap(() => this.loader++))
        .subscribe(() => {
          if (this.loader >= 100) {
            this._dialog_ref.close();
          }
        });
    }, 1000);
  }

}
