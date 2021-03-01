import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWorkComponent } from './column-work.component';

describe('ColumnWorkComponent', () => {
  let component: ColumnWorkComponent;
  let fixture: ComponentFixture<ColumnWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
