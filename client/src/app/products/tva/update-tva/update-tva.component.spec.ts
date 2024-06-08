import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTvaComponent } from './update-tva.component';

describe('UpdateTvaComponent', () => {
  let component: UpdateTvaComponent;
  let fixture: ComponentFixture<UpdateTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
