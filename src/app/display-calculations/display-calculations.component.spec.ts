import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCalculationsComponent } from './display-calculations.component';

describe('DisplayCalculationsComponent', () => {
  let component: DisplayCalculationsComponent;
  let fixture: ComponentFixture<DisplayCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCalculationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
