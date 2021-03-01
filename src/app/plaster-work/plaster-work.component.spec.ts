import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasterWorkComponent } from './plaster-work.component';

describe('PlasterWorkComponent', () => {
  let component: PlasterWorkComponent;
  let fixture: ComponentFixture<PlasterWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasterWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasterWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
