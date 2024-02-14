import { Component, Inject } from '@angular/core';
import { Service } from '../../utilities/models/service.c';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrl: './view-service.component.scss'
})
export class ViewServiceComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public _data: Service) {}

}
