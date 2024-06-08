import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:"", component:CustomerComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-customer", component:AddCustomerComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-customer/:id", component:UpdateCustomerComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-customer", component:DeleteCustomerComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-customer", component:DetailCustomerComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
