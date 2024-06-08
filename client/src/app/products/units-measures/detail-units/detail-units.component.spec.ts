import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUnitsComponent } from './detail-units.component';

describe('DetailUnitsComponent', () => {
  let component: DetailUnitsComponent;
  let fixture: ComponentFixture<DetailUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
