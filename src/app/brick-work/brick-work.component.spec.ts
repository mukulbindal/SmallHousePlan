import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickWorkComponent } from './brick-work.component';

describe('BrickWorkComponent', () => {
  let component: BrickWorkComponent;
  let fixture: ComponentFixture<BrickWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
