import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabWorkComponent } from './slab-work.component';

describe('SlabWorkComponent', () => {
  let component: SlabWorkComponent;
  let fixture: ComponentFixture<SlabWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlabWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
