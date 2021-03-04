import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConvertorComponent } from './unit-convertor.component';

describe('UnitConvertorComponent', () => {
  let component: UnitConvertorComponent;
  let fixture: ComponentFixture<UnitConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitConvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
