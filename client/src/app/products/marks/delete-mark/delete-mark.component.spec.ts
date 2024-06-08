import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarkComponent } from './delete-mark.component';

describe('DeleteMarkComponent', () => {
  let component: DeleteMarkComponent;
  let fixture: ComponentFixture<DeleteMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
