import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevalenceComponent } from './prevalence.component';

describe('PrevalenceComponent', () => {
  let component: PrevalenceComponent;
  let fixture: ComponentFixture<PrevalenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrevalenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevalenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
