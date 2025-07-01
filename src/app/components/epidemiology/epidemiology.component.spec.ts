import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpidemiologyComponent } from './epidemiology.component';

describe('EpidemiologyComponent', () => {
  let component: EpidemiologyComponent;
  let fixture: ComponentFixture<EpidemiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpidemiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpidemiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
