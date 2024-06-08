import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostComponent } from './cost.component';
import { AddCostComponent } from './add-cost/add-cost.component';
import { UpdateCostComponent } from './update-cost/update-cost.component';
import { DeleteCostComponent } from './delete-cost/delete-cost.component';
import { DetailCostComponent } from './detail-cost/detail-cost.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path:"cost", component:CostComponent,canActivate: [AuthGuard]
  },
  {
    path:"cost/add", component:AddCostComponent,canActivate: [AuthGuard]
  },
  {
    path:"cost/update", component:UpdateCostComponent,canActivate: [AuthGuard]
  },
  {
    path:"cost/delete", component:DeleteCostComponent,canActivate: [AuthGuard]
  },
  {
    path:"cost/detail", component:DetailCostComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostRoutingModule { }
