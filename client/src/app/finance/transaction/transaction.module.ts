import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { TransactionRoutingModule } from './transaction-routing.module';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { DetailTransactionComponent } from './detail-transaction/detail-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction.component';


@NgModule({
  declarations: [
    TransactionComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    DeleteTransactionComponent,
    DetailTransactionComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    TransactionRoutingModule,ClarityModule, ClrDatagridModule
  ]
})
export class TransactionModule { }
