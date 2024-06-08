import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccessoireComponent } from './update-accessoire.component';

describe('UpdateAccessoireComponent', () => {
  let component: UpdateAccessoireComponent;
  let fixture: ComponentFixture<UpdateAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccessoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
