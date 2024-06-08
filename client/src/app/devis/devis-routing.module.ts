import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisComponent } from './devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { DeleteDevisComponent } from './delete-devis/delete-devis.component';
import { DetailDevisComponent } from './detail-devis/detail-devis.component';
import { CommandDevisComponent } from './command-devis/command-devis.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:"", component:DevisComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-devis", component:AddDevisComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-devise/:id", component:UpdateDevisComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-devise", component:DeleteDevisComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-devise", component:DetailDevisComponent,canActivate: [AuthGuard]
  },
  {
    path:"devise-commande/:id", component:CommandDevisComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisRoutingModule { 
  
}
