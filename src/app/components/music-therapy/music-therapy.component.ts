import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music-therapy',
  templateUrl: './music-therapy.component.html',
  styleUrl: './music-therapy.component.css',
})
export class MusicTherapyComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
