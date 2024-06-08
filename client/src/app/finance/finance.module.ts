import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { InitialCashComponent } from './initial-cash/initial-cash.component';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPaymentComponent } from './payment-method/add-payment/add-payment.component';
import { DeletePaymentComponent } from './payment-method/delete-payment/delete-payment.component';

import { CostModule } from './cost/cost.module';
import { TransactionModule } from './transaction/transaction.module';
import { DetailPaymentComponent } from './payment-method/detail-payment/detail-payment.component';


@NgModule({
  declarations: [
    PaymentMethodComponent,
    InitialCashComponent,
    AddPaymentComponent,
    DeletePaymentComponent,
   
    DetailPaymentComponent,
 
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    FinanceRoutingModule,ClarityModule,ClrDatagridModule,CostModule,TransactionModule
  ]
})
export class FinanceModule { }
