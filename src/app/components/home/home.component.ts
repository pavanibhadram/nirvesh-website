import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

interface IProvideCard {
  title: string;
  image: string;
  bgColor: string;
}

interface IServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface IUniqueFeature {
  id: number;
  text: string;
  content: string; // Content for the dropdown
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  slides = [
    {
      title: 'Precise Data Tracking',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ac imperdiet pulvinar euismod cursus pulvinar sed.',
      image: 'assets/slide-1.gif',
      link: '/learn-more',
    },
    {
      title: 'Innovative solution',
      description:
        'Comprehensive data analysis and visualization tools for informed decision making.',
      image: 'assets/slide-2.gif',
      link: '/analytics',
    },
    {
      title: 'Cost Effective Treatment',
      description:
        'Stay updated with live tracking and instant notifications for critical metrics.',
      image: 'assets/slide-3.png',
      link: '/monitoring',
    },
  ];

  whatWeProvide = [
    {
      title:
        'End-to-End cost effective Post-operative Brain health Management system',
      image: 'assets/men-brain.png',
      bg: 'bg-yellow-200',
    },
    {
      title:
        'Targeted cognitive status classification algorithm > 95% accuracy',
      image: 'assets/brain-bulb.png',
      bg: 'bg-green-200',
    },
    {
      title:
        'Beneficial Interventions (Audio-Visual Training) to improve well-being',
      image: 'assets/laptop-with-lamp.png',
      bg: 'bg-pink-200',
    },
    {
      title: 'Multimodal data collection and continuous analysis',
      image: 'assets/phone-graph.png',
      bg: 'bg-blue-200',
    },
  ];

  serviceCards = [
    {
      icon: 'assets/service-1.png',
      title: '24*7 Doctor Availability',
      description: 'all time available for emergencies',
    },
    {
      icon: 'assets/service-2.png',
      title: 'Live Tracking',
      description: 'Monitor Your cognitive health',
    },
    {
      icon: 'assets/service-3.png',
      title: 'Beneficial Interventions',
      description: 'Control your stress instantly',
    },
    {
      icon: 'assets/service-4.png',
      title: 'Post Operative Brain Health Management',
      description: 'We take care of your operations and health',
    },
    {
      icon: 'assets/service-5.png',
      title: 'Accurate Brain Health Status',
      description: 'Focus on brain health and longevity',
    },
    {
      icon: 'assets/service-6.png',
      title: 'Data-Collection and Continuous Analysis',
      description: 'Continuous health care and constant monitoring',
    },
  ];

  uniqueFeatures: IUniqueFeature[] = [
    {
      id: 1,
      text: 'Integrated intelligent sensors',
      content:
        'Devices have sensors similar to EEG and fNIRS which work in tandem by sensing brain waves, and cerebral blood flow that represent the current brain health of patients at affordable rates than standard brain health diagnosis.',
      isOpen: false,
    },
    {
      id: 2,
      text: 'Refining doctor-patient relations',
      content:
        'Test results followed with routine consultations from doctors and healthcare professionals thereby generating Real-World Evidence (RWE) for precise Medi-care and enhanced treatments.',
      isOpen: false,
    },
    {
      id: 3,
      text: 'Real time data driven personalized cognitive management',
      content:
        'Seamless integration of hardware wearables and software platform',
      isOpen: false,
    },
  ];

  currentSlide = 0;
  private slideInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideShow();
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  toggleFeature(id: number) {
    this.uniqueFeatures = this.uniqueFeatures.map((feature) => ({
      ...feature,
      isOpen: feature.id === id ? !feature.isOpen : false, // Toggle clicked, close others
    }));
  }
}
