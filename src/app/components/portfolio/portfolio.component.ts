import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioItems = [
    {
      title: 'Introduction',
      image: 'assets/intro.jpg',
      description:
        'The dysfunction of the brain due to a large occurring blows to the brain causing huge impact and in turn leading to traumatic aftereffects.',
      link: '/introduction',
    },
    {
      title: 'Functional Magnetic Resonance Induction',
      image: 'assets/magnetic.jpg',
      description:
        'These massive machines estimate the oxygenated levels of blow flow inside the brain wherein lack or excess amount can cause complexity.',
      link: '/functional-magnetic',
    },
    {
      title: 'Prevalence',
      image: 'assets/preva.jpg',
      description:
        'Dive inside to know about how common TBI is among the general population with factual analysis.',
      link: '/prevalence',
    },
    {
      title: 'Stroke Rehabilitation',
      image: 'assets/storke.jpg',
      description:
        'Conditions where the supply of blood is cut off or the blood vessels in the brain burst leading to severe conditions, at times even death.',
      link: '/stroke-rehabilitation',
    },
    {
      title: 'Epidemiology',
      image: 'assets/epidemi.jpg',
      description: 'The rate at which brain stroke happens among humans.',
      link: '/epidemiology',
    },
    {
      title: 'Music Therapy',
      image: 'assets/music.jpg',
      description:
        'The influence music does on the mind and how it determines the state of a person all detailed down inside.',
      link: '/music-therapy',
    },
  ];
}
