import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-functional-magnetic',
  templateUrl: './functional-magnetic.component.html',
  styleUrl: './functional-magnetic.component.css',
})
export class FunctionalMagneticComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
