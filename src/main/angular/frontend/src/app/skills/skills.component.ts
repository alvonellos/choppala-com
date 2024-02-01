import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  public skills: {
    img: string,
    name: string,
    details: string,
    images: string[],
  }[] = [
      {
        img: '../../assets/img/programming-languages.jpg',
        name: 'Programming Languages',
        details: '',
        images: [
          '../../assets/img/c-language.jpg',
          '../../assets/img/c-plus-plus.jpg',
          '../../assets/img/java-language.jpg',
        ],
      },
      {
        img: '../../assets/img/frameworks.jpg',
        name: 'Frameworks',
        details: '',
        images: [
          '../../assets/img/jquery.jpg',
          '../../assets/img/angular-js.jpg',
          '../../assets/img/jasmine.jpg',
          '../../assets/img/mocha.jpg',
          '../../assets/img/spring.jpg',
          '../../assets/img/hibernate.jpg'
        ],
      },
      {
        img: '../../assets/img/ides.jpg',
        name: 'Development Tools and IDE',
        details: '',
        images: [
          '../../assets/img/intellij.jpg',
          '../../assets/img/ecllipse.jpg',
          '../../assets/img/adobe-dreamweaver.jpg',
          '../../assets/img/rational-rose.jpg',
          '../../assets/img/web-storm.jpg',
          '../../assets/img/drupal.jpg',
        ],
      },
      {
        img: '../../assets/img/databases.jpg',
        name: 'Databases',
        details: '',
        images: [],
      },
      {
        img: '../../assets/img/operating-systems.jpg',
        name: 'Operating Systems',
        details: '',
        images: [],
      },
      {
        img: '../../assets/img/web-technologies.jpg',
        name: 'Web Technologies',
        details: '',
        images: [],
      },
      {
        img: '../../assets/img/debugging-tools.jpg',
        name: 'Debugging Tools',
        details: '',
        images: [],
      },
      {
        img: '../../assets/img/applications.jpg',
        name: 'Application/Web Servers',
        details: '',
        images: []
      },
      {
        img: '../../assets/img/web-services.jpg',
        name: 'Web Services',
        details: '',
        images: []
      }
    ];

  ngOnInit(): void {

  }

}
