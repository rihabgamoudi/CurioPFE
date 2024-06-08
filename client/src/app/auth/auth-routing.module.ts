import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"detail", component:DetailComponent,canActivate: [AuthGuard]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
