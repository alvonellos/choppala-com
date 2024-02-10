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
          '../../assets/img/joomla.jpg',
          '../../assets/img/sublime.jpg',
        ],
      },
      {
        img: '../../assets/img/databases.jpg',
        name: 'Databases',
        details: '',
        images: [
          '../../assets/img/oracle.jpg',
          '../../assets/img/sql-server.jpg',
          '../../assets/img/my-sql.jpg',
        ],
      },
      {
        img: '../../assets/img/operating-systems.jpg',
        name: 'Operating Systems',
        details: '',
        images: [
          '../../assets/img/window-xp.jpg',
          '../../assets/img/mac.jpg',
          '../../assets/img/ios.jpg',
          '../../assets/img/windows.jpg',
          '../../assets/img/unix.jpg',
          '../../assets/img/solaris.jpg',
          '../../assets/img/linux.jpg',
        ],
      },
      {
        img: '../../assets/img/web-technologies.jpg',
        name: 'Web Technologies',
        details: '',
        images: [
          '../../assets/img/html.jpg',
          '../../assets/img/css.jpg',
          '../../assets/img/javascript.jpg',
          '../../assets/img/bootstrap.jpg',
          '../../assets/img/php.jpg',
        ],
      },
      {
        img: '../../assets/img/debugging-tools.jpg',
        name: 'Debugging Tools',
        details: '',
        images: [
          '../../assets/img/bugzilla.jpg',
          '../../assets/img/firebug.jpg',
          '../../assets/img/fidler.jpg',
          '../../assets/img/selenium.jpg',
          '../../assets/img/grunt.jpg',
          '../../assets/img/wireshark.jpg',
        ],
      },
      {
        img: '../../assets/img/applications.jpg',
        name: 'Application/Web Servers',
        details: '',
        images: [
          '../../assets/img/apache.jpg',
          '../../assets/img/jboss.jpg',
          '../../assets/img/weblogic.jpg',
        ]
      },
      {
        img: '../../assets/img/web-services.jpg',
        name: 'Web Services',
        details: '',
        images: [
          '../../assets/img/soap.jpg',
          '../../assets/img/wsdl.jpg',
          '../../assets/img/json.jpg',
          '../../assets/img/rest.jpg',
          '../../assets/img/soa.jpg',
        ]
      }
    ];

  ngOnInit(): void {

  }

}
