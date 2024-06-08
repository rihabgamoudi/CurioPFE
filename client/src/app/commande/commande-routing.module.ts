import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from './commande/update-commande/update-commande.component';
import { DeleteCommandeComponent } from './commande/delete-commande/delete-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { PrintInvoiceComponent } from './invoice/print-invoice/print-invoice.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path:"", component:CommandeComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-order", component:AddCommandeComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-order/:id", component:UpdateCommandeComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-order", component:DeleteCommandeComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-order", component:DetailCommandeComponent,canActivate: [AuthGuard]
  },
  {
    path:"invoice", component:InvoiceComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-invoice", component:AddInvoiceComponent,canActivate: [AuthGuard]
  },
  
  {
    path:"delete-invoice", component:DeleteInvoiceComponent,canActivate: [AuthGuard]
  },
  {
    path:"print-invoice", component:PrintInvoiceComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
