import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IScienceInsight {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-the-science',
  templateUrl: './the-science.component.html',
  styleUrl: './the-science.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TheScienceComponent {
  scienceInsights: IScienceInsight[] = [
    {
      title: 'Brain Analysis',
      description:
        'EEG examines cortex areas: occipital (visual), parietal (coordination), temporal, and frontal (processing) to understand brain activity and responses.',
      image: 'assets/the-science/brain-analysis.png',
      alt: 'Brain Analysis',
    },
    {
      title: 'FNIRS Insights',
      description:
        'fNIRS uses near-infrared spectroscopy to evaluate cerebral oxygenation by detecting oxyhaemoglobin and deoxyhaemoglobin levels, analyzing cerebral functions.',
      image: 'assets/the-science/fnirs-insights.png',
      alt: 'FNIRS Insights',
    },
    {
      title: 'Brain Injury',
      description:
        'Mental health impacts social functioning; brain injury research aims to dispel the notion of incurable conditions and improve understanding.',
      image: 'assets/the-science/brain-injury.png',
      alt: 'Brain Injury',
    },
    {
      title: 'Neuro Nurturing',
      description:
        'Neuroscience advances nurture brain cells post-accidents. Neuropsychologists diagnose brain injuries, addressing cognitive issues like depression, anxiety, and emotional regulation.',
      image: 'assets/the-science/neuro-nurturing.png',
      alt: 'Neuro Nurturing',
    },
    {
      title: 'Tech Advances',
      description:
        'Modern medicine uses Brain-Computer Interface to analyze brain signals, aiding conditions like paralysis and Parkinsons, showcasing neurological advancements.',
      image: 'assets/the-science/tech-advances.png',
      alt: 'Tech Advances',
    },
    {
      title: 'Neurotech Growth',
      description:
        'Neurotechnology will dominate healthcare, potentially reaching USD 40 billion. Key areas include neuroprosthetics, neuromodulation, and neurosensing, promising significant impact.',
      image: 'assets/the-science/neurotech-growth.png',
      alt: 'Neurotech Growth',
    },
  ];

  brainInsights = [
    {
      title: 'Brain Analysis',
      description:
        'EEG examines cortex areas: occipital (visual), parietal (coordination), temporal, and frontal (processing) to understand brain activity and responses.',
      image: 'assets/brain-analysis-person.png', // Replace with actual image path for this item
      alignment: 'right', // 'left' or 'right' for content position
    },
    {
      title: 'FNIRS Insights',
      description:
        'fNIRS uses near-infrared spectroscopy to evaluate cerebral oxygenation by detecting oxyhemoglobin and deoxyhemoglobin levels, analyzing cerebral functions.',
      image: 'assets/fnirs-insights-person.png', // Replace with actual image path for this item
      alignment: 'left',
    },
    {
      title: 'Brain Injury',
      description:
        'Mental health impacts social functioning; binary metrics challenge to dispel the notion of favorable condition and improve understanding.',
      image: 'assets/brain-injury-person.png', // Replace with actual image path for this item
      alignment: 'right',
    },
    {
      title: 'Neuro Nurturing',
      description:
        'Neuroscience advances nurturing brain cells crucial for brain care. Neurologists diagnose brain injuries, addressing cognitive issues like depression, anxiety, and emotional regulation.',
      image: 'assets/neuro-nurturing-person.png', // Replace with actual image path for this item
      alignment: 'left',
    },
    {
      title: 'Tech Advances',
      description:
        'Modern medicine uses Brain-Computer Interface to analyze brain signals, aiding conditions like paralysis, showcasing neurological advancements.',
      image: 'assets/tech-advances-person.png', // Replace with actual image path for this item
      alignment: 'right',
    },
    {
      title: 'Neurotech Growth',
      description:
        'Neurotechnology will dominate healthcare, profoundly revolutionizing clinical brain. Key areas include neuroprosthetics, neuromodulation, and neurosensing, promising significant impact.',
      image: 'assets/neurotech-growth-person.png', // Replace with actual image path for this item
      alignment: 'left',
    },
  ];

  // ... other methods/properties
}
