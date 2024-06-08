import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialCashComponent } from './initial-cash/initial-cash.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { AddPaymentComponent } from './payment-method/add-payment/add-payment.component';
import { DeletePaymentComponent } from './payment-method/delete-payment/delete-payment.component';import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:"initial-cash", component:InitialCashComponent,canActivate: [AuthGuard]
  },
  {
    path:"payment-method", component:PaymentMethodComponent,canActivate: [AuthGuard]
  },
  {
    path:"payment-method/add", component:AddPaymentComponent,canActivate: [AuthGuard]
  },
  {
    path:"payment-method/delete", component:DeletePaymentComponent,canActivate: [AuthGuard]
  },
 
  {
    path:'transaction',canActivate: [AuthGuard],
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
   },
   {
    path:'cost',canActivate: [AuthGuard],
    loadChildren: () => import('./cost/cost.module').then(m => m.CostModule)
   },
   
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {
  addPayment(value: any) {
    throw new Error('Method not implemented.');
  }
}
