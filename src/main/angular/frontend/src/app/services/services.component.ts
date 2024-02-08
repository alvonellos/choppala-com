import { Component, EventEmitter, Output } from '@angular/core';
import { Service } from '../utilities/models/service.c';
import { MatDialog } from '@angular/material/dialog';
import { ViewServiceComponent } from './view-service/view-service.component';
import { ResponsiveService } from '../utilities/services/responsive.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  @Output() link: EventEmitter<any> = new EventEmitter<any>();
  public characters = 180;
  public screen_size = '';

  public services: Service[] = [
    {
      img: '../../assets/img/microservices.jpg',
      name: 'Microservices',
      details: `As a software engineer, I specialize in microservices architecture. 
        Microservices break down applications into independent, scalable services, offering 
        clients modular, maintainable, and agile solutions. With microservices, clients benefit 
        from faster development, easier scalability, and improved fault isolation, resulting in more 
        efficient and resilient software systems.
        `,
    },
    {
      img: '../../assets/img/api.jpg',
      name: 'API Development',
      details: `As a software engineer, I specialize in API development. I create robust, 
        efficient APIs that enable seamless communication between different software systems.
         Clients benefit from secure, scalable interfaces that enhance system interoperability 
         and streamline processes.`
    },
    {
      img: '../../assets/img/web.jpg',
      name: 'Web Development',
      details: `As a software engineer, I specialize in developing web applications. 
        I create user-friendly, dynamic web apps tailored to clients' needs. With my expertise, 
        clients get responsive designs, robust functionality, and seamless user experiences.`
    }
  ];

  constructor(private _dialog: MatDialog, public _responsive_service: ResponsiveService) {
    this.screen_size = _responsive_service.current_screen_size;
    _responsive_service.currentScreenSize.subscribe((r) => {
      this.screen_size = r;
    });
  }

  public on_click(eve: string) {
    this.link.emit(eve);
  }

  public truncate_string(desc: string) {
    if (desc.length <= this.characters) {
      return desc;
    }
    const subString = desc.slice(0, this.characters - 1); // the original check
    return (true
      ? subString.slice(0, subString.lastIndexOf(" "))
      : subString);
  }

  public view_service(service: Service) {
    this._dialog.open(ViewServiceComponent, {
      minWidth: this.screen_size === 'XSmall' ? '90vw' :
        this.screen_size === 'Small' ? '90vw' :
          this.screen_size === 'Medium' ? '80vw' :
            this.screen_size === 'Large' ? '60vw' :
              this.screen_size === 'XLarge' ? '50vw' :
                '90vw',
      data: service,
      panelClass: 'p-0',
    })
  }

}
