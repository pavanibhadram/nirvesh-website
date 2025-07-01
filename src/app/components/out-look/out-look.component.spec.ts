import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutLookComponent } from './out-look.component';

describe('OutLookComponent', () => {
  let component: OutLookComponent;
  let fixture: ComponentFixture<OutLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutLookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
