import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,ClarityModule,ClrDatagridModule,
 FormsModule, ReactiveFormsModule,
  ]
  
})
export class UsersModule { }
