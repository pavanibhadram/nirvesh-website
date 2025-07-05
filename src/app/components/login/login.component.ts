import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  activeLoginTab: 'patient' | 'doctor' | 'hospital' = 'doctor'; // Default to Doctor's Login
  passwordVisible: boolean = false;

  selectLoginTab(tab: 'patient' | 'doctor' | 'hospital') {
    this.activeLoginTab = tab;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // You would add your actual login logic here
  onLogin() {
    console.log('Attempting login for:', this.activeLoginTab);
    // Implement your authentication service call
  }
}
