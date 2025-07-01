import { Component } from '@angular/core';

@Component({
  selector: 'app-out-look',
  templateUrl: './out-look.component.html',
  styleUrl: './out-look.component.css',
  standalone: true,
})
export class OutLookComponent {
  topLeftTitle = 'Global Expansion in Neurological Treatment';

  topRightText = `Nirvesh Enterprises aims for global dominance in neurotechnology.
Meeting increasing demand for EEGs and fNIRS. Bridging treatment gaps with personalized care.
Professionalism merges with compassion for holistic improvement.`;

  product = {
    image: 'assets/innovative-products.jpg',
    title: 'Our Products',
    desc: `Our products have spread their way into the market by using cutting edge technology, with smarter approach for easy to use with high affordability. Today, information on your brain health can be gathered via our products. The group of devices is designed to capture brain activity with precision, reliability and convenience. Our solutions are for everyone, with the ability of self-paced learning and even for larger scale check-ups at one's easier and self-paced level.`,
  };

  quote = `The key to sustain in the global market is by advancing in the sector and enhancing the use of technology at an easier level with self-paced technology to save the consumer the complexity of using a new device. Hence, we remove the benefit of doubt from the minds of our consumers in choosing our innovations. With the right strategy and idea we desire to lead our way into the neuro-sciTech economy by blending in with the needs of our consumers to become the top-notch company to help them rebuild, regain and recover from brain health disorders.`;
}
