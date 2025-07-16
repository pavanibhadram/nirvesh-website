import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent {
  teamMembers = [
    {
      name: 'Neurologist',
      // designation: 'Chief Neuroscientist',
      description:
        'Rehabilitation involves a multidisciplinary team providing therapy to improve daily functioning. Cognitive Rehabilitation Therapy (CRT) offers individualized programs to restore brain function and manage deficits, requiring further development and evaluation for effectiveness.',
      image: 'assets/neurologist-team.jpg',
    },
    {
      name: 'Radiologist ',
      // designation: 'Lead Neurologist',
      description:
        'Doctors use fMRI to understand brain function, assess surgical risks, and evaluate stroke, trauma, or degenerative disease effects. The FDA approves fMRI mainly for surgical planning, helping to map brain functions and monitor tumors.',
      image: 'assets/radiologist-team.jpeg',
    },
    {
      name: 'Physiatrist',
      // designation: 'Clinical Psychologist',
      description:
        'Active involvement in stroke rehabilitation is beneficial. Encourage participation in therapy sessions to aid recovery while promoting independence. Assess and meet the survivors evolving needs through medical team consultations and home adjustments.',
      image: 'assets/physiatrists-team.webp',
    },
    {
      name: 'Epidemiologist',
      // designation: 'Research Fellow',
      description:
        'Traumatic brain injury is a major global health issue, leading to death and disability. Mortality rates vary by severity, age, and geographical location. Effective prevention strategies and access to rehabilitation services are critical for improving outcomes worldwide.',
      image: 'assets/epidemiologist-team.jpg',
    },
    {
      name: 'Music Therapist',
      // designation: 'Senior Therapist',
      description:
        'Neurologic Music Therapy (NMT) optimizes sensorimotor, language, and cognitive functions through tailored music interventions. It improves executive functions, emotional regulation, and reduces depression and anxiety post-TBI. Music-based therapies also aid movement rehabilitation, reduce agitation, and enhance adaptive behaviors in both adult and pediatric populations.',
      image: 'assets/music-therapy.jpg',
    },
  ];
}
