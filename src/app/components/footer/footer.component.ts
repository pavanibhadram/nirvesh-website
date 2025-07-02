import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  whyUsLinks = [
    { label: 'Our Vision', link: '/why-us/our-vision' },
    { label: 'Values', link: '/why-us/values' },
    { label: 'Products', link: '/why-us/product' },
    { label: 'Outlook', link: '/why-us/out-look' },
  ];

  quickLinks = [
    { label: 'Home', link: '/' },
    { label: 'The Science', link: '/the-science' },
    { label: 'Our Team', link: '/our-team' },
    { label: 'Contact Us', link: '/contact-us' },
    { label: 'Synpasil Login', link: '#' },
  ];

  companyLinks = [
    { label: 'Newsletter', link: '#' },
    { label: 'Careers', link: '/careers' },
    { label: 'Team of Service', link: '#' },
    { label: 'Privacy Policy', link: '#' },
  ];
}
