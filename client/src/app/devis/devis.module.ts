import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from '../devis/devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { DeleteDevisComponent } from './delete-devis/delete-devis.component';
import { DetailDevisComponent } from './detail-devis/detail-devis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { CommandDevisComponent } from './command-devis/command-devis.component';


@NgModule({
  declarations: [
    DevisComponent,
    AddDevisComponent,
    UpdateDevisComponent,
    DeleteDevisComponent,
    DetailDevisComponent,
    CommandDevisComponent
  ],
  imports: [
    CommonModule,
    DevisRoutingModule,ClarityModule,ClrDatagridModule,
    FormsModule, ReactiveFormsModule,
  ]
  
})
export class DevisModule { }
