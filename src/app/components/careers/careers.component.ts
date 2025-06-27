import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent {
  jobs = [
    {
      title: 'Frontend Developer',
      experience: '2-3 Years',
      location: 'Hyderabad',
      description:
        'Front-end developers are responsible for the user interface, graphics, and look of websites and web applications. They work...',
    },
    // Add more jobs as needed
  ];

  showApplicationModal = false;

  openApplicationModal() {
    this.showApplicationModal = true;
  }

  closeApplicationModal() {
    this.showApplicationModal = false;
  }
}
