import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { AppRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ClientFormComponent, CustomerListComponent, CustomerListElementComponent],
  exports:[ClientFormComponent, CustomerListComponent, CustomerListElementComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService]
})
export class InvoiceModule { }

