import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCostComponent } from './delete-cost.component';

describe('DeleteCostComponent', () => {
  let component: DeleteCostComponent;
  let fixture: ComponentFixture<DeleteCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
