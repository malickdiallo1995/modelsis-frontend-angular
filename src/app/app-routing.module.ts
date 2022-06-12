import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TypeComponent} from './type/type.component';
import {ProductAddComponent} from './product-add/product-add.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product', component: ProductAddComponent},
  {path: 'addType', component: TypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
