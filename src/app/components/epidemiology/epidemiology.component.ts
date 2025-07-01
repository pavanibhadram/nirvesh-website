import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-epidemiology',
  templateUrl: './epidemiology.component.html',
  styleUrl: './epidemiology.component.css',
})
export class EpidemiologyComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
