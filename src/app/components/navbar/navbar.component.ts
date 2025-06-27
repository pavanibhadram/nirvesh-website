import { Component, HostListener } from '@angular/core';

interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[];
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'Why us',
      children: [
        { label: 'Our Vision', link: '/services/web' },
        { label: 'Values', link: '/services/mobile' },
        { label: 'Product', link: '/services/ui-ux' },
        { label: 'Out Look', link: '/services/ui-ux' },
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
  isMobileMenuOpen: boolean = false;
  openMobileDropdownIndex: number | null = null;
  constructor() {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    this.openDropdownIndex = null;

    this.openMobileDropdownIndex = null;
  }

  toggleMobileDropdown(index: number): void {
    this.openMobileDropdownIndex =
      this.openMobileDropdownIndex === index ? null : index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.openMobileDropdownIndex = null;
    }
  }
}
