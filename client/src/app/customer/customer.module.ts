import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';


@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    DetailCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,ClarityModule,ClrDatagridModule,
   FormsModule, ReactiveFormsModule,
  ]
  
})
export class CustomerModule { }
