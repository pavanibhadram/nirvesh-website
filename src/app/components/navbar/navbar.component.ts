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
        { label: 'Our Vision', link: '/why-us/our-vision' },
        { label: 'Values', link: '/why-us/values' },
        { label: 'Product', link: '/why-us/product' },
        { label: 'Out Look', link: '/why-us/out-look' },
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

  toggleDesktopDropdown(index: number): void {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.relative') &&
      !target.closest('.mobile-menu-button')
    ) {
      this.openDropdownIndex = null;
    }
  }
}
