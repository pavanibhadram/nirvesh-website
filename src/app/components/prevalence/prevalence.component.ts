import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-prevalence',
  templateUrl: './prevalence.component.html',
  styleUrl: './prevalence.component.css',
})
export class PrevalenceComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
