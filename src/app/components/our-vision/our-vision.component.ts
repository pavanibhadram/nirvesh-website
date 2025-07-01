import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class OurVisionComponent {
  featureCards = [
    {
      icon: 'assets/values-brain.png',
      title: 'Multimodal Assessment',
      desc: 'Introducing cost-effective, technologically advanced neurosensing solutions globally.',
    },
    {
      icon: 'assets/values-brain.png',
      title: 'Top Provider',
      desc: 'Aiming to lead in delivering effective neurostimulatory results worldwide.',
    },
    {
      icon: 'assets/values-brain.png',
      title: 'Enhanced Recovery',
      desc: 'Developing systems for efficient monitoring of neurological states for better recovery.',
    },
  ];
}
