import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegistreComponent,
    DetailComponent,
  
  ],
  imports: [
    CommonModule,ClrDatagridModule,
    AuthRoutingModule,FormsModule,ClarityModule,ReactiveFormsModule,
  ]

})
export class AuthModule { }
