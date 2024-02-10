import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewProjectComponent } from './view-project/view-project.component';
import { Project } from '../utilities/models/project.c';
import { ResponsiveService } from '../utilities/services/responsive.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  public screen_size = '';

  constructor(private _dialog: MatDialog,
    private _responsive_service: ResponsiveService) {
    this.screen_size = _responsive_service.current_screen_size;
    _responsive_service.currentScreenSize.subscribe((r) => {
      this.screen_size = r;
    });
  }

  public projects: Project[] = [
    {
      img: '../../assets/img/project-1.jpg',
      role: 'Senior Software Engineer',
      date: 'Feb 22 – Till date',
      place: 'Paysafe Group -Atlanta, Georgia',
      description: `Full stack microservices payments application catering to the sports gaming industry, enabling 
        secure transaction processing for xxxx people around the world to purchase online in their own 
        currency using a variety of global payment methods; all while providing a secure world-class 
        online experience`,
      responsibilities: `Responsible for creating efficient design and developing User Interaction screens using HTML5, 
        CSS, JavaScript, jQuery, Bootstrap, Node, Angular, Angular JS. 
        Used various Core Java concepts such as Multi-Threading, Exception Handling, Collection APIs 
        to implement various features and enhancements and worked on the Java 8 concepts. 
        Developed the front-end user interface using Servlets, JDBC, HTML5, DHTML, CSS3, XML, 
        Ajax, JavaScript, AngularJS, Angular & Bootstrap as per Use Case Specification.
        Worked on Registering and Discovery of the microservices through Eureka.
        Used Spring MVC (Model View Controller) to handle/intercept the user requests and used 
        various controllers to delegate the request flow to the back-end tier of the application.
        Built Restful APIs based on the JAVA 1.8 and worked on the Spring fox for creating swagger UI 
        for all the services to be able to run the request and responses.
        Worked on Apache kafka on messaging system that communicates the data at batch jobs.
        Created the New applications using the Microservices architecture based on the spring-boot, 
        spring-Rest, Spring-hibernate.
        Worked on migrating applications from monolithic Angular versions to latest Angular version 11 
        and Angular JS to latest Angular 11 version. 
        Worked on the CI/CD pipeline using the spinnaker, built the gradle projects stored all the artifacts 
        in the nexus repository. 
        Analyzed the heap dumps, memory leaks, and code loopholes when doing performance testing.
        Worked and deployed on all our environments System testing, system integration, production 
        environment.
        Worked on following the payment processing security standards thru client token generation with 
        Authentication and Authorization model using Spring AOP concepts. 
        Wrote all the Test cases using the JUNIT unit testing and Integration test cases using Mockito.
        Worked on the Code Quality tools like Sonar Qube and code coverage using Jacoco and maven 
        surefire plugin.
        Worked on the Quality testing and made sure all the defects are working effectively.
        Deployed all the applications in AWS through spinnaker. 
        Unit test the application using the JUNIT, Mockito and involved in TDD and BDD environment.
        Involved in complete Agile/SDLC – Requirement Analysis, Development, System and Integration 
        Testing.
        Maintain, enhance, and recommend solutions that best suit business and technology needs from 
        Backend and UI standpoint. 
        Documented and designed the solutions in confluence pages. 
        Used SourceTree for version controlling and regularly pushed the code to BitBucket and Gitlab
        stash.`,
      env: `HTML5, CSS, JavaScript, JSON, IntelliJ, Protractor, Jasmine, JUnit, Bootstrap, 
        AngularJS, Angular, rxjs, JSON, Spring-boot, Docker, JUNIT, RestfulAPI, Core Java, Java 1.8, Jenkins, 
        Maven, SOAPUI/POSTMAN, Jira, Microservices, Swagger2.0, Design Patterns, Servlets, BitBucket, 
        Sourcetree, AWS, spinnaker, Oracle.`
    },
    {
      img: '../../assets/img/project-2.jpg',
      role: 'Fidelity Investments – Senior Software Engineer',
      date: 'July 21 – Feb 22',
      place: 'Accenture -Atlanta, Georgia',
      description: `Proprietary business portal that analyzes and retrieves the 401k information for each client based 
      on the quarterly investment plans, deduction fess, billing year cycle, different service plans etc.`,
      responsibilities: `
                Responsible for creating efficient design and developing User Interaction screens using HTML5, 
          CSS, JavaScript, jQuery, Bootstrap, Node, Angular, Angular JS. 
          Used various Core Java concepts such as Multi-Threading, Exception Handling, Collection APIs 
          to implement various features and enhancements and worked on the Java 8 concepts. 
          Developed the front-end user interface using Servlets, JDBC, HTML5, DHTML, CSS3, XML, 
          Ajax, JavaScript, AngularJS, Angular & Bootstrap as per Use Case Specification.
          Used APIGEE as the API Gateway to pass the requests coming through the service. 
          Used Spring MVC (Model View Controller) to handle/intercept the user requests and used 
          various controllers to delegate the request flow to the back-end tier of the application.
          Built Restful APIs based on the JAVA 1.8 and worked on the Spring fox for creating swagger UI 
          for all the services to be able to run the request and responses.
          Created the New applications using the Microservices architecture based on the spring-boot, 
          spring-Rest, Spring-hibernate.
          Worked on migrating applications from monolithic Angular versions to latest Angular version 11
          and Angular JS to latest Angular 11 version. 
          Worked on most of the angular node modules such as date picker, ngx-ui-loader, rxjs, toastr etc..
          Worked on writing stored procedures, Oracle databases for the business reporting tools.
          Worked on the CI/CD pipeline using the Jenkins, built the maven project stored all the artifacts in 
          the nexus repository. 
          Analyzed the heap dumps, memory leaks, and code loopholes when doing performance testing.
          Worked and deployed on all our environments System testing, system integration, production 
          environment.
          Wrote all the Test cases using the JUNIT unit testing and Integration test cases using Mockito.
          Worked on the Code Quality tools like Sonar Qube and code coverage using Jacoco and maven 
          surefire plugin.
          Worked on the Quality testing and made sure all the defects are working effectively.
          Implemented the online application by using Core Java, JDBC, JSP, Servlets, Web Services, 
          SOAP, and WSDL and used SOAPUI/POSTMAN to test RESTful web service.
          Architected, designed and implemented a SPA (Single Page Application) in AngularJS and 
          Angular which consume JSON from a Spring MVC, using Spring Security to secure the 
          Application.
          Worked on the PaaS environment-based applications. PaaS role instances for refactored 
          applications and performing Load test on the applications using JMeter with n number of requests 
          and analyzing the performance metric and code loopholes.
          Deployed all the applications in JBOSS Openshift PAAS platform. 
          Unit test the application using the JUNIT, Mockito and involved in TDD and BDD environment.
          Involved in complete Agile/SDLC – Requirement Analysis, Development, System and Integration 
          Testing.
          Maintain, enhance, and recommend solutions that best suit business and technology needs from 
          UI standpoint.
          Used SourceTree for version controlling and regularly pushed the code to BitBucket stash.`,
      env: `HTML5, CSS, JavaScript, jQuery, AJAX, JSON, Eclipse, Protractor, Jasmine, JUnit, 
      Bootstrap, AngularJS, Angular, rxjs, JSON, Spring-boot, Docker, JUNIT, RestfulAPI, Core Java, Java 1.8, 
      Jenkins, Maven, SOAPUI/POSTMAN, Jira, Microservices, Swagger2.0, Design Patterns, Servlets, 
      BitBucket, Sourcetree, openshift, PAAS platform, Oracle`,
    },
    {
      img: '../../assets/img/project-three.jpg',
      place: 'Delta Airlines -Atlanta, Georgia',
      role: 'API Developer-Niche',
      date: 'April 18 – July 21',
      description: `Providing the customers to book a flight by returning all the flight information for outbound and 
      inbound trips for different customers like meta searches, delta.com etc., To book a flight and 
      modify the flight and retrieve all the information about the aircraft with inventory, availability 
      and schedule.`,
      responsibilities: `Responsible for creating efficient design and developing User Interaction screens using HTML5, 
      CSS3, JavaScript, jQuery, AJAX and JSON.
      Used various Core Java concepts such as Multi-Threading, Exception Handling, Collection APIs 
      to implement various features and enhancements and worked on the Java 8 concepts. 
      Developed the front-end user interface using Servlets, JDBC, HTML5, DHTML, CSS3, XML, 
      Ajax, JavaScript, AngularJS, & Bootstrap as per Use Case Specification.
      Involved in Java code, which generated XML document, which in turn used XSLT and created 
      many xsd files that defines the schema of the xml request/response. 
      Worked on the Existing BAU (Business As Usual) Applications. 
      Used APIGEE as the API Gateway to pass the requests coming through the service. 
      Used Spring MVC (Model View Controller) to handle/intercept the user requests and used 
      various controllers to delegate the request flow to the back-end tier of the application.
      Built Restful API’s based on the JAVA 1.8 and worked on the SOA services of the various 
      existing applications. 
      Created the New applications using the Microservices architecture based on the spring-boot, 
      spring-Rest, Spring-hibernate.
      Used Swagger for the API documentation in the yaml and used for the request and response in the 
      JSON format.
      Worked on the CI/CD pipeline using the Jenkins, built the maven project stored all the artifacts in 
      the nexus repository. 
      Worked and deployed on all our environments System testing, system integration, production 
      environment.
      Analyzed the heap dumps, memory leaks, and code loopholes when doing performance testing.
      Wrote all the Test cases using the JUNIT unit testing and Integration test cases using Mockito.
      Worked on the Code Quality tools like Sonar Qube and code coverage using Jacoco and maven 
      surefire plugin.
      Worked on the Quality testing and made sure all the defects are working effectively.
      Implemented the online application by using Core Java, JDBC, JSP, Servlets, Web Services, 
      SOAP, and WSDL and used SOAPUI/POSTMAN to test RESTful web service.
      Architected, designed and implemented a SPA (Single Page Application) in AngularJS which 
      consume JSON from a Spring MVC, using Spring Security to secure the Application.
      Worked on the PaaS environment-based applications. PaaS role instances for refactored 
      applications and performing Load test on the applications using JMeter with n number of requests 
      and analyzing the performance metric and code loopholes.
      Deployed all the applications in JBOSS Openshift PAAS platform. 
      Unit test the application using the JUNIT, Mockito and involved in TDD and BDD environment.
      Involved in complete Agile/SDLC – Requirement Analysis, Development, System and Integration 
      Testing.
      Maintain, enhance, and recommend solutions that best suit business and technology needs from 
      UI standpoint.
      Used Git for version controlling and regularly pushed the code to Gitlab.`,
      env: ` HTML5, CSS3, JavaScript, jQuery, AJAX, JSON, Eclipse, Protractor, Jasmine, 
      SASS/LESS, Grunt, JUnit, Bootstrap, AngularJS, JSON, Spring-boot, Docker, JUNIT, RestfulAPI, Core 
      Java, Java 1.8, Jenkins, Maven, SOAPUI/POSTMAN, Jira, Microservices, Swagger2.0, Design Patterns, 
      XSLT, XML, JSON, Servlets, Gitlab, IBM websphere, openshift, PAAS platform`
    },
    {
      img: '../../assets/img/project-four.jpg',
      place: 'Anira Solutions',
      date: 'June 17 – Mar 18',
      role: 'Developer',
      responsibilities: `Web application designing and development using HTML, CSS and AngularJS, database in SQL 
      server.
      To provide assistance to design, program and execute simple test plans, to implement, document
      and maintain basic computing applications. 
      To write and compile basic code and constructs basic database objects based on documented
      design. 
      To provide assistance with networks with Networks, implementations and Server maintenance.
      Create New users and Monitor security privileges. Learn and maintain DevOps admin 
      environment. 
      Responsible for creating efficient design and developing User Interaction screens using HTML5, 
      CSS3, JavaScript, jQuery, AJAX and JSON.
      Designing User Interface based on MVC framework, which accomplishes a tight and neat coordination of Spring MVC, AngularJS, HTML5, CSS3, JavaScript, Bootstrap.
      Involved in front-end development utilizing Java Script frameworks such as Angular.JS and jQuery 
      as well as front end technologies HTML5, CSS3.
      Worked on Object Oriented Programming and API's like Collections, Multi-Threading, Exceptionhandling.
      Implemented navigation using Spring MVC controllers, configured controllers using Spring MVC 
      annotations and configuration files.
      Involved in Restful web services to call for POST, PUT, DELETE and GET methods.
      Used JavaScript for popping up a new window with control over size, position, and attributes of 
      the new window`,
      description: '',
      env: `Java, HTML, CSS, Spring MVC, JavaScript, jQuery, Angular JS, Restful Web Service, 
      JDBC, Git`
    },
    {
      img: '../../assets/img/project-four.jpg',
      date: 'Jan 17 – May 17',
      description: '',
      place: 'Tek Riders, Inc',
      role: 'Developer-Intern',
      responsibilities: `Web application designing and development using HTML, CSS and AngularJS, database in SQL 
      server.
      To provide assistance to design, program and execute simple test plans, to implement, document
      and maintain basic computing applications. 
      To write and compile basic code and constructs basic database objects based on documented
      design. 
      To provide assistance with networks with Networks, implementations and Server maintenance.
      Create New users and Monitor security privileges. Learn and maintain DevOps admin 
      environment. 
      Responsible for creating efficient design and developing User Interaction screens using HTML5, 
      CSS3, JavaScript, jQuery, AJAX and JSON.
      Designing User Interface based on MVC framework, which accomplishes a tight and neat coordination of Spring MVC, AngularJS, HTML5, CSS3, JavaScript, Bootstrap.
      Involved in front-end development utilizing Java Script frameworks such as Angular.JS and jQuery 
      as well as front end technologies HTML5, CSS3.
      Worked on Object Oriented Programming and API's like Collections, Multi-Threading, Exceptionhandling.
      Implemented navigation using Spring MVC controllers, configured controllers using Spring MVC 
      annotations and configuration files.
      Involved in Restful web services to call for POST, PUT, DELETE and GET methods.
      Used JavaScript for popping up a new window with control over size, position, and attributes of 
      the new window.`,
      env: `Java, HTML, CSS, Spring MVC, JavaScript, jQuery, Angular JS, Restful Web Service, 
      JDBC, Git`,
    }
  ];

  public show_project(p: Project) {
    this._dialog.open(ViewProjectComponent, {
      data: p,
      panelClass: 'p-0',
      minWidth: this.screen_size === 'XSmall' ? '90vw' :
        this.screen_size === 'Small' ? '90vw' :
          this.screen_size === 'Medium' ? '80vw' :
            this.screen_size === 'Large' ? '60vw' :
              this.screen_size === 'XLarge' ? '50vw' :
                '90vw',
    });
  }

}
