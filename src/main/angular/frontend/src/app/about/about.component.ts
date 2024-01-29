import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  public years = '7';
  public intro = `Hi, My Name is Himanth Choppala and I’m Senior Software Engineer at Paysafe Group | FinTech | Full stack developer`;
  public details = `The professional experience as a senior software engineer involved in Object-oriented analysis, Design, Development, Testing, Implementation and Maintenance of web bases and client server multi-tier applications using Java/J2EE technology. Experience in java development, designing and developing many applications using J2EE technologies. Experience working on the API’s related to SOA and Microservices architecture`;

}
