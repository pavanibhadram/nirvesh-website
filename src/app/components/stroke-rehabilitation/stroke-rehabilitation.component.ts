import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-stroke-rehabilitation',
  templateUrl: './stroke-rehabilitation.component.html',
  styleUrl: './stroke-rehabilitation.component.css',
})
export class StrokeRehabilitationComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
