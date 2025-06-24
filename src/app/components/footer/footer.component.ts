import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  whyUsLinks = [
    { label: 'Our Vision', link: '#' },
    { label: 'Values', link: '#' },
    { label: 'Products', link: '#' },
    { label: 'Outlook', link: '#' },
  ];

  quickLinks = [
    { label: 'Home', link: '/' },
    { label: 'The Science', link: '/science' },
    { label: 'Our Team', link: '/team' },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Synpasil Login', link: '#' },
  ];

  companyLinks = [
    { label: 'Newsletter', link: '#' },
    { label: 'Careers', link: '/careers' },
    { label: 'Team of Service', link: '#' },
    { label: 'Privacy Policy', link: '#' },
  ];
}
