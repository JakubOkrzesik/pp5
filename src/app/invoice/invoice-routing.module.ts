import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';

export const routes: Routes = [
  {path: "customer/list", component: CustomerListComponent},
  {path: "customer/form", component: ClientFormComponent}
]

@NgModule(
  {
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

