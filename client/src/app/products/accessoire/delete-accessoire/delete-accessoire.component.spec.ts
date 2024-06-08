import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccessoireComponent } from './delete-accessoire.component';

describe('DeleteAccessoireComponent', () => {
  let component: DeleteAccessoireComponent;
  let fixture: ComponentFixture<DeleteAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccessoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
