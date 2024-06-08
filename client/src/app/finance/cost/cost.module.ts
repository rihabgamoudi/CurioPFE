import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostRoutingModule } from './cost-routing.module';
import { CostComponent } from './cost.component';
import { AddCostComponent } from './add-cost/add-cost.component';
import { UpdateCostComponent } from './update-cost/update-cost.component';
import { DeleteCostComponent } from './delete-cost/delete-cost.component';
import { DetailCostComponent } from './detail-cost/detail-cost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';


@NgModule({
  declarations: [
    CostComponent,
    AddCostComponent,
    UpdateCostComponent,
    DeleteCostComponent,
    DetailCostComponent
  ],
  imports: [
    CommonModule,
    CostRoutingModule,ReactiveFormsModule,FormsModule,
    ClarityModule, ClrDatagridModule
  ]
})
export class CostModule { }
