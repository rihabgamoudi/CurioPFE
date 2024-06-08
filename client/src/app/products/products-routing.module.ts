import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvaComponent } from './tva/tva.component';
import { AddTvaComponent } from './tva/add-tva/add-tva.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { AddAccessoireComponent } from './accessoire/add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './accessoire/update-accessoire/update-accessoire.component';
import { DeleteAccessoireComponent } from './accessoire/delete-accessoire/delete-accessoire.component';
import { DetailAccessoireComponent } from './accessoire/detail-accessoire/detail-accessoire.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';

import { MarksComponent } from './marks/marks.component';
import { AddMarkComponent } from './marks/add-mark/add-mark.component';
import { UpdateMarkComponent } from './marks/update-mark/update-mark.component';
import { DeleteMarkComponent } from './marks/delete-mark/delete-mark.component';

import { PricesComponent } from './prices/prices.component';
import { AddPriceComponent } from './prices/add-price/add-price.component';
import { UpdatePriceComponent } from './prices/update-price/update-price.component';
import { DeletePriceComponent } from './prices/delete-price/delete-price.component';
import { DetailPriceComponent } from './prices/detail-price/detail-price.component';

import { UnitsMeasuresComponent } from './units-measures/units-measures.component';
import { AddUnitsComponent } from './units-measures/add-units/add-units.component';
import { UpdateUnitsComponent } from './units-measures/update-units/update-units.component';
import { DeleteUnitsComponent } from './units-measures/delete-units/delete-units.component';
import { DetailUnitsComponent } from './units-measures/detail-units/detail-units.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';

import { DeleteTvaComponent } from './tva/delete-tva/delete-tva.component';
import { UpdateTvaComponent } from './tva/update-tva/update-tva.component';
import { DetailTvaComponent } from './tva/detail-tva/detail-tva.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [

   // products
   {
    path:"", component:ProductsComponent,canActivate: [AuthGuard]
  },
  {
    path:"add-product", component:AddProductComponent,canActivate: [AuthGuard]
  },
  {
    path:"update-product/:id", component:UpdateProductComponent,canActivate: [AuthGuard]
  },
  {
    path:"delete-product", component:DeleteProductComponent,canActivate: [AuthGuard]
  },

  // accessoire
  {
    path:"accessoire", component:AccessoireComponent,canActivate: [AuthGuard]
  },
  {
    path:"accessoire/add-accessoire", component:AddAccessoireComponent,canActivate: [AuthGuard]
  },
  {
    path:"accessoire/update-accessoire/:id", component:UpdateAccessoireComponent,canActivate: [AuthGuard]
  },
  {
    path:"accessoire/delete-accessoire", component:DeleteAccessoireComponent,canActivate: [AuthGuard]
  },
  {
    path:"accessoire/detail-accessoire", component:DetailAccessoireComponent,canActivate: [AuthGuard]
  },
  
  //category
  {
    path:"category", component:CategoryComponent,canActivate: [AuthGuard]
  },
  {
    path:"category/add", component:AddCategoryComponent,canActivate: [AuthGuard]
  },
  {
    path:"category/update/:id", component:UpdateCategoryComponent,canActivate: [AuthGuard]
  },
  {
    path:"category/delete", component:DeleteCategoryComponent,canActivate: [AuthGuard]
  },
  {
    path:"category/detail", component:DetailCategoryComponent,canActivate: [AuthGuard]
  },
  //mark
  {
    path:"marks", component:MarksComponent,canActivate: [AuthGuard]
  },
  {
    path:"marks/add", component:AddMarkComponent,canActivate: [AuthGuard]
  },
  {
    path:"marks/update/:id", component:UpdateMarkComponent,canActivate: [AuthGuard]
  },
  {
    path:"marks/delete", component:DeleteMarkComponent,canActivate: [AuthGuard]
  },
  
  //price
  {
    path:"price", component:PricesComponent,canActivate: [AuthGuard]
  },
  {
    path:"price/add", component:AddPriceComponent,canActivate: [AuthGuard]
  },
  {
    path:"price/update/:id", component:UpdatePriceComponent,canActivate: [AuthGuard]
  },
  {
    path:"price/delete", component:DeletePriceComponent,canActivate: [AuthGuard]
  },
  {
    path:"price/detail", component:DetailPriceComponent,canActivate: [AuthGuard]
  },
 
  //units-measure
  {
    path:"units-measures", component:UnitsMeasuresComponent ,canActivate: [AuthGuard]
  },
  {
    path:"units-measures/add", component:AddUnitsComponent ,canActivate: [AuthGuard]
  },
  {
    path:"units-measures/update/:id", component:UpdateUnitsComponent ,canActivate: [AuthGuard]
  },
  {
    path:"units-measures/delete", component:DeleteUnitsComponent ,canActivate: [AuthGuard]
  },
  {
    path:"units-measures/detail", component:DetailUnitsComponent ,canActivate: [AuthGuard]
  },
  
  // tva
  {
    path:"tva", component:TvaComponent ,canActivate: [AuthGuard]
  },
  {
    path:"tva/add", component:AddTvaComponent,canActivate: [AuthGuard]
  },
   {
    path:"tva/delete", component:DeleteTvaComponent,canActivate: [AuthGuard]
  },
  {
    path:"tva/update/:id", component:UpdateTvaComponent ,canActivate: [AuthGuard]
  },
  {
    path:"tva/detail", component:DetailTvaComponent,canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
