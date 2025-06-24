import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuItems = [
    { label: 'Home', link: '/' },
    {
      label: 'Why Us',
      children: [
        { label: 'Our Vision', link: '' },
        { label: 'Values', link: '' },
        { label: 'Product', link: '' },
        { label: 'Outlook', link: '' },
      ],
    },
    { label: 'The Science', link: '/the-science' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Our Team', link: '/our-team' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact Us', link: '/contact-us' },
    { label: 'Login', link: '/login' },
  ];

  openDropdownIndex: number | null = null;
}
