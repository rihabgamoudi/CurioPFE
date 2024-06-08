import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsMeasuresComponent } from './units-measures.component';

describe('UnitsMeasuresComponent', () => {
  let component: UnitsMeasuresComponent;
  let fixture: ComponentFixture<UnitsMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
