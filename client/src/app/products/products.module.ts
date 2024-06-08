import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { TvaComponent } from './tva/tva.component';
import { AddTvaComponent } from './tva/add-tva/add-tva.component';
import { UpdateTvaComponent } from './tva/update-tva/update-tva.component';
import { DeleteTvaComponent } from './tva/delete-tva/delete-tva.component';
import { DetailTvaComponent } from './tva/detail-tva/detail-tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { CategoryComponent } from './category/category.component';


import { MarksComponent } from './marks/marks.component';
import { PricesComponent } from './prices/prices.component';

import { UnitsMeasuresComponent } from './units-measures/units-measures.component';

import { AddAccessoireComponent } from './accessoire/add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './accessoire/update-accessoire/update-accessoire.component';
import { DeleteAccessoireComponent } from './accessoire/delete-accessoire/delete-accessoire.component';
import { DetailAccessoireComponent } from './accessoire/detail-accessoire/detail-accessoire.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';

import { AddMarkComponent } from './marks/add-mark/add-mark.component';
import { UpdateMarkComponent } from './marks/update-mark/update-mark.component';
import { DeleteMarkComponent } from './marks/delete-mark/delete-mark.component';

import { AddPriceComponent } from './prices/add-price/add-price.component';
import { UpdatePriceComponent } from './prices/update-price/update-price.component';
import { DeletePriceComponent } from './prices/delete-price/delete-price.component';
import { DetailPriceComponent } from './prices/detail-price/detail-price.component';

import { AddUnitsComponent } from './units-measures/add-units/add-units.component';
import { UpdateUnitsComponent } from './units-measures/update-units/update-units.component';
import { DeleteUnitsComponent } from './units-measures/delete-units/delete-units.component';
import { DetailUnitsComponent } from './units-measures/detail-units/detail-units.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';

import { UpdateProductComponent } from './products/update-product/update-product.component';
// import { AddLeadComponent } from './lead-time/add-lead/add-lead.component';
// import { UpdateLeadComponent } from './lead-time/update-lead/update-lead.component';
// import { DeleteLeadComponent } from './lead-time/delete-lead/delete-lead.component';
// import { DetailLeadComponent } from './lead-time/detail-lead/detail-lead.component';


@NgModule({
  declarations: [
    TvaComponent,
    AddTvaComponent,
    UpdateTvaComponent,
    DeleteTvaComponent,
    DetailTvaComponent,
    AccessoireComponent,
    CategoryComponent,
  
    MarksComponent,
    PricesComponent,
   
    UnitsMeasuresComponent,
   
    AddAccessoireComponent,
    UpdateAccessoireComponent,
    DeleteAccessoireComponent,
    DetailAccessoireComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    DetailCategoryComponent,
   
    AddMarkComponent,
    UpdateMarkComponent,
    DeleteMarkComponent,
 
    AddPriceComponent,
    UpdatePriceComponent,
    DeletePriceComponent,
    DetailPriceComponent,
    AddUnitsComponent,
    UpdateUnitsComponent,
    DeleteUnitsComponent,
    DetailUnitsComponent,
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
 
    UpdateProductComponent,
    // AddLeadComponent,
    // UpdateLeadComponent,
    // DeleteLeadComponent,
    // DetailLeadComponent
  ],
  imports: [
    CommonModule, ClarityModule,ClrDatagridModule,
    ProductsRoutingModule,FormsModule, ReactiveFormsModule,
  ]
})
export class ProductsModule { }
