import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
