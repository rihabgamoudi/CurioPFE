import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDevisComponent } from './command-devis.component';

describe('CommandDevisComponent', () => {
  let component: CommandDevisComponent;
  let fixture: ComponentFixture<CommandDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
