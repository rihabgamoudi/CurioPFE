import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { DetailTransactionComponent } from './detail-transaction/detail-transaction.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path:"", component:TransactionComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-transaction", component:AddTransactionComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-transaction/:id", component:UpdateTransactionComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-transaction", component:DeleteTransactionComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-transaction", component:DetailTransactionComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
