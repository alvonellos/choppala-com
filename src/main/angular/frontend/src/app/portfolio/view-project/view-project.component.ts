import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../utilities/models/project.c';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.scss'
})
export class ViewProjectComponent {

  public envs: string[] = [];
  public responsibilities: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public _data: Project) {
    this.envs = _data.env.split(",");
    this.responsibilities = _data.responsibilities.split(".");
  }
}
