import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccessoireComponent } from './detail-accessoire.component';

describe('DetailAccessoireComponent', () => {
  let component: DetailAccessoireComponent;
  let fixture: ComponentFixture<DetailAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAccessoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
