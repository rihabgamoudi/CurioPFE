import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCostComponent } from './detail-cost.component';

describe('DetailCostComponent', () => {
  let component: DetailCostComponent;
  let fixture: ComponentFixture<DetailCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
