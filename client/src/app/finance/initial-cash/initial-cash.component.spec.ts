import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialCashComponent } from './initial-cash.component';

describe('InitialCashComponent', () => {
  let component: InitialCashComponent;
  let fixture: ComponentFixture<InitialCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
