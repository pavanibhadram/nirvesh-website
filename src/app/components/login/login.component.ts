import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class LoginComponent {
  activeLoginTab: 'patient' | 'doctor' | 'hospital' = 'doctor';
  loginTypes = ['patient', 'doctor', 'hospital'];
  showPassword = false;

  onLoginTypeChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.activeLoginTab = selectedValue as 'patient' | 'doctor' | 'hospital';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log('Attempting to log in as:', this.activeLoginTab);
  }
}
