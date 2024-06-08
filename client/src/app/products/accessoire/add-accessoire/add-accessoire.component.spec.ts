import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessoireComponent } from './add-accessoire.component';

describe('AddAccessoireComponent', () => {
  let component: AddAccessoireComponent;
  let fixture: ComponentFixture<AddAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
