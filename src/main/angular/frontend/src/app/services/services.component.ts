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
        efficient and resilient software systems.`,
      description: `<h2>Services</h2>
        <h5>Custom Microservices Development</h5>
        <p>Our team of experienced software engineers crafts bespoke microservices
            solutions designed to enhance your business operations and accelerate
            growth.</p>
        <h5>Microservices Architecture Design</h5>
        <p>We offer expert guidance in architecting robust microservices
            architectures
            that promote flexibility, maintainability, and scalability.</p>
        <h5>Containerization and Orchestration</h5>
        <p>Leveraging industry-leading containerization technologies like Docker and
            Kubernetes, we streamline deployment and management of microservices,
            ensuring seamless orchestration across your infrastructure.</p>
        <h5>API Development and Integration</h5>
        <p>Our expertise extends to developing RESTful APIs and integrating them
            seamlessly with existing systems, enabling smooth communication between
            microservices and other components of your ecosystem.</p>
        <h5>Monitoring and DevOps</h5>
        <p>We provide comprehensive monitoring solutions and DevOps services to
            ensure
            the continuous performance optimization, fault detection, and rapid
            response
            required for maintaining a resilient microservices environment.</p>
        <h5>Consulting and Training</h5>
        <p>Choppala's Microservices offers consulting services and training programs
            to
            empower your team with the knowledge and skills needed to effectively
            adopt
            and leverage microservices architecture.</p>
        <h4>Why Choose Me</h4>
        <h6>Expertise</h6>
        <h6>Customization</h6>
        <h6>Scalability</h6>
        <h6>Reliability</h6>
        <h6>Support</h6>
        <blockquote>
            <cite>Hemanth Choppala</cite>
        </blockquote>`
    },
    {
      img: '../../assets/img/api.jpg',
      name: 'API Development',
      details: `As a software engineer, I specialize in API development. I create robust, 
        efficient APIs that enable seamless communication between different software systems.
         Clients benefit from secure, scalable interfaces that enhance system interoperability 
         and streamline processes.`,
      description: `
         <h2>Services</h2>
        <h5>Custom API Development</h5>
        <p>Our team of seasoned software engineers specializes in developing custom APIs from scratch, 
        designed to seamlessly integrate with your existing systems and meet your specific requirements.</p>
        <h5>RESTful API Design</h5>
        <p>We follow industry best practices to design RESTful APIs that promote simplicity,
         flexibility, and ease of use, ensuring optimal performance and interoperability
          across platforms.</p>
        <h5>API Documentation</h5>
        <p>Clear and comprehensive documentation is essential for facilitating seamless integration and 
        adoption of your APIs. We provide meticulous documentation to guide developers
         in utilizing your APIs effectively.</p>
        <h5>API Integration</h5>
        <p>Whether you need to integrate third-party APIs into your system or expose your own APIs for 
        integration with external services, we have the expertise to ensure 
        smooth communication and data exchange between disparate systems.</p>
        <h5>API Security</h5>
        <p>Security is paramount in API development. We implement robust authentication, authorization,
         and encryption mechanisms to safeguard your APIs and protect sensitive data from 
         unauthorized access and malicious attacks.</p>
        <h5>API Testing and Quality Assurance</h5>
        <p>Our rigorous testing and quality assurance processes ensure that your APIs are thoroughly 
        vetted for reliability, performance, and compliance with industry standards before 
        they are deployed into production.</p>
        <h5>API Maintenance and Support</h5>
        <p>We provide ongoing maintenance and support services to ensure the continued 
        reliability and functionality of your APIs, as well as prompt resolution of any
         issues that may arise.</p>
        <h4>Why Choose Me</h4>
        <h6>Expertise</h6>
        <h6>Customization</h6>
        <h6>Scalability</h6>
        <h6>Reliability</h6>
        <h6>Security</h6>
        <h6>Support</h6>
        <blockquote>
            <cite>Hemanth Choppala</cite>
        </blockquote>`,
    },
    {
      img: '../../assets/img/web.jpg',
      name: 'Web Development',
      details: `As a software engineer, I specialize in developing web applications. 
        I create user-friendly, dynamic web apps tailored to clients' needs. With my expertise, 
        clients get responsive designs, robust functionality, and seamless user experiences.`,
      description: `
        <h2>Services</h2>
        <h5>Custom Website Development</h5>
        <p> Our team of skilled developers leverages the latest technologies and best practices
         to create tailor-made websites that reflect your brand
        's identity, cater to your target audience, and align with your business goals.</p>
        <h5>Responsive Web Design</h5>
        <p>We prioritize user experience by designing websites that are fully responsive and
         optimized for seamless viewing and interaction across all devices, ensuring a
          consistent and engaging experience for your visitors.</p>
        <h5>E-commerce Solutions</h5>
        <p>Whether you're launching a new online store or seeking to enhance the performance
         of your existing e-commerce platform, we provide comprehensive e-commerce 
         solutions tailored to streamline operations, boost sales, and maximize ROI.</p>
        <h5>Content Management Systems (CMS)</h5>
        <p>We specialize in developing and integrating robust CMS solutions such as WordPress, 
        Drupal, and Joomla, empowering you to easily manage and update your website 
        content without requiring technical expertise.</p>
        <h5>Web Application Development</h5>
        <p>From dynamic web applications to interactive portals and enterprise-level systems, 
        we have the expertise to conceptualize, design, and develop custom web applications
         that meet your unique requirements and deliver exceptional user experiences.</p>
        <h5>Website Maintenance and Support</h5>
        <p>Our commitment to excellence extends beyond the initial launch. We offer ongoing
         maintenance and support services to ensure the continued performance, 
         security, and functionality of your website, as well as timely resolution of any issues
          that may arise..</p>
            <h5>SEO Optimization</h5>
            <p>We implement SEO best practices to optimize your website for search engines, 
            improve visibility, and drive organic traffic, helping you reach and engage
             with your target audience more effectively.</p>
            <h5>UI/UX Design</h5>
            <p>Our talented design team combines creativity with usability principles to create 
            intuitive and visually appealing user interfaces that enhance user engagement, 
            increase conversion rates, and elevate your brand image.</p>
        <h4>Why Choose Me</h4>
        <h6>Expertise</h6>
        <h6>Collaboration</h6>
        <h6>Quality Assurance</h6>
        <h6>Scalability</h6>
        <h6>Support</h6>
        <blockquote>
            <cite>Hemanth Choppala</cite>
        </blockquote>`,
    },
    {
      img: '../../assets/img/backend.jpg',
      name: 'Back-end Development',
      details: `Leveraging Java, .NET and other technologies to develop server-side logic 
      and APIs that enable your app to run smoothly, scale effortlessly, and keep 
      business-critical functions operating at peak efficiency.`,
      description: `
      <h2>Services</h2>
      <h5>Custom Web Development</h5>
      <p>Tailored frontend solutions crafted to meet your specific needs and requirements.</p>
      <h5>Responsive Design</h5>
      <p>Ensuring your website looks great and functions flawlessly across all devices and screen sizes.</p>
      <h5>User Interface Design</h5>
      <p>Designing intuitive, user-friendly interfaces that enhance user interaction and satisfaction.</p>
      <h5>Cross-Browser Compatibility</h5>
      <p>Guaranteeing consistent performance and appearance across different web browsers.</p>
      <h5>Performance Optimization</h5>
      <p>Fine-tuning your website for speed and efficiency, providing a seamless user experience.</p>
      <h5>Accessibility</h5>
      <p>Implementing accessibility best practices to ensure your website is usable by everyone, regardless of ability.</p>
          <h5>Maintenance and Support</h5>
          <p>Continuous support and maintenance services to keep your website running smoothly.</p>
      <h4>Why Choose Me</h4>
      <h6>Expertise</h6>
      <h6>Collaboration</h6>
      <h6>Quality Assurance</h6>
      <h6>Scalability</h6>
      <h6>Support</h6>
      <blockquote>
          <cite>Hemanth Choppala</cite>
      </blockquote>`,
    },
    {
      img: '../../assets/img/frontend.jpg',
      name: 'Front-end Development',
      details: `Crafting responsive client-side solutions with rich functionality that 
      render blazingly fast across various screen sizes, with the help 
      of cutting-edge technologies such as Angular, React, and more.`,
      description: `
      <h2>Services</h2>
      <h5>Custom Backend Development</h5>
      <p>Tailored backend solutions designed to meet the unique requirements of your project.</p>
      <h5>Database Design and Optimization</h5>
      <p>Expertise in creating efficient database structures and optimizing queries for enhanced performance.</p>
      <h5>API Development</h5>
      <p>Building secure and reliable APIs to facilitate communication between different components of your application.</p>
      <h5>Server Management and Deployment</h5>
      <p>Ensuring smooth deployment and efficient management of servers to keep your application running flawlessly.</p>
      <h5>Authentication and Authorization</h5>
      <p> Implementing secure authentication and authorization mechanisms to safeguard your application's data.</p>
      <h5>Data Processing and Analysis</h5>
      <p>Leveraging backend technologies to process and analyze data, providing valuable insights for your business.</p>
          <h5>Integration Services</h5>
          <p>Integrating third-party services and APIs to extend the functionality of your application.</p>
      <h4>Why Choose Me</h4>
      <h6>Expertise</h6>
      <h6>Collaboration</h6>
      <h6>Quality Assurance</h6>
      <h6>Scalability</h6>
      <h6>Support</h6>
      <blockquote>
          <cite>Hemanth Choppala</cite>
      </blockquote>`,
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
