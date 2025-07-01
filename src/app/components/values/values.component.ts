import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrl: './values.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ValuesComponent {
  valueCards = [
    {
      title: 'Client-Centered Care',
      desc: 'Aiding the needs of our clientele effectively.',
    },
    {
      title: 'Affordable Homecare',
      desc: 'Providing quality homecare at low costs.',
    },
    {
      title: 'Personalized Check-ups',
      desc: 'Check-ups tailored to your own pace.',
    },
    {
      title: 'Expert Follow-ups',
      desc: 'Expertise in diagnosis with patient-doctor follow-ups.',
    },
  ];

  topCards = [
    {
      icon: 'assets/icons/client-centered.svg',
      title: 'Client-Centered Care',
      desc: 'Aiding the needs of our clientele effectively.',
    },
    {
      icon: 'assets/icons/affordable.svg',
      title: 'Affordable Homecare',
      desc: 'Providing quality homecare at low costs.',
    },
    {
      icon: 'assets/icons/personalized.svg',
      title: 'Personalized Check-ups',
      desc: 'Check-ups tailored to your own pace.',
    },
    {
      icon: 'assets/icons/expert.svg',
      title: 'Expert Follow-ups',
      desc: 'Expert re-diagnosis with patient-doctor follow-ups.',
    },
  ];

  bottomCards = [
    {
      image: 'assets/values-brain.png',
      title: 'Innovative Approach',
      desc: 'Inspire and innovate with cutting-edge solutions.',
    },
    {
      image: ' assets/values-brain.png ',
      title: 'Continuous Analysis',
      desc: 'Multimodal data collection and continuous neuro-health analysis.',
    },
    {
      image: 'assets/values-brain.png',
      title: 'Personalized Therapy',
      desc: 'Efficiently catering to growing research needs.',
    },
  ];
}
