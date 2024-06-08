import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:"", component:UsersComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-user", component:AddUserComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-user/:id", component:UpdateUserComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-user", component:DeleteUserComponent,canActivate: [AuthGuard]
  },
  {
    path:"detail-user", component:DetailUserComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
