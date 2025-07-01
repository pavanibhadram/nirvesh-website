import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductComponent {
  // Vision and Mission cards
  visionCards = [
    {
      image: 'assets/product-accessibility.png',
      title: 'Global Accessibility',
      desc: 'Delivering affordable neuro-health treatment worldwide.',
    },
    {
      image: 'assets/product-integrated.png',
      title: 'Integrated Technology',
      desc: 'Merging diverse technologies for precise brain data analysis.',
    },
  ];

  // Innovative Products section
  innovative = {
    image: 'assets/innovative-products.jpg',
    title: 'Innovative Products',
    desc: 'Synapci and NeuroNirs merge EEG and NIRS technologies for mental health analysis & R&D, they offer advanced tools and expert consultancy.',
    bullets: [
      'Merging EEG and NIRS for mental health analysis.',
      'Products offer valuable outcomes and expert consultancy.',
      'Currently in research and development phase.',
    ],
  };

  // Addressing Brain Disorders section
  brainDisorders = {
    title: 'Addressing Brain Disorders',
    desc: 'Despite normal brain function, disorders can cause severe changes. Push injury effects by measuring neural activity precisely. Our technology aids recovery by measuring neural activity accurately.',
    bullets: [
      'Disorders cause significant alterations despite normal function.',
      'Injuries lead to imbalances, disorders, and trauma.',
      'Our technology aids recovery by precisely measuring neural activity.',
    ],
  };

  // Future Developments section
  future = {
    image: 'assets/product-future.png',
  };
}
