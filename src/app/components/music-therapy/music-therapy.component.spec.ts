import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTherapyComponent } from './music-therapy.component';

describe('MusicTherapyComponent', () => {
  let component: MusicTherapyComponent;
  let fixture: ComponentFixture<MusicTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicTherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
