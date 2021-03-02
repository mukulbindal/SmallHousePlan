import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuttyPrimerWorkComponent } from './putty-primer-work.component';

describe('PuttyPrimerWorkComponent', () => {
  let component: PuttyPrimerWorkComponent;
  let fixture: ComponentFixture<PuttyPrimerWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuttyPrimerWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuttyPrimerWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
