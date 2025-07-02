import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IScienceInsight {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-the-science',
  templateUrl: './the-science.component.html',
  styleUrl: './the-science.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TheScienceComponent {}
