import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InformationComponent } from './information/information.component';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    InformationComponent
  ],
  imports: [
    CommonModule, ClarityModule ,RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    InformationComponent
  ]
})
export class CoreModule { }
