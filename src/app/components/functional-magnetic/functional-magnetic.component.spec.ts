import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMagneticComponent } from './functional-magnetic.component';

describe('FunctionalMagneticComponent', () => {
  let component: FunctionalMagneticComponent;
  let fixture: ComponentFixture<FunctionalMagneticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionalMagneticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalMagneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
