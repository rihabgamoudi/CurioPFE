import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from './commande/update-commande/update-commande.component';
import { DeleteCommandeComponent } from './commande/delete-commande/delete-commande.component';

import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { PrintInvoiceComponent } from './invoice/print-invoice/print-invoice.component';


@NgModule({
  declarations: [
    CommandeComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    DeleteCommandeComponent,
    DetailCommandeComponent,
    InvoiceComponent,
    AddInvoiceComponent,
    DeleteInvoiceComponent,
    PrintInvoiceComponent,
 
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,ClarityModule,ClrDatagridModule,
    FormsModule, ReactiveFormsModule,
  ]
})
export class CommandeModule { }
