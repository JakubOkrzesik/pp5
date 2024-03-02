import { Component,OnDestroy,OnInit } from '@angular/core'
import {CustomerService } from '../../services/customer.service'
import {Customer } from '../../models/customer'

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customerList: Customer[] = []
  constructor (private readonly customerService: CustomerService) {
    this.customerService = customerService
  }

  ngOnInit (): void {
    this.customerService
      .getCustomers()
      .subscribe((transformedResult: Customer[]) => {
        this.customerList = transformedResult
      })
  }

  ngOnDestroy (): void {
    console.log('Zamykam komponent')
  }

  deletedCustomer (customer: Customer): void {
    console.log('Kasujemy klienta o nipie' + customer.nip)
    this.customerService.removeCustomer(customer).subscribe({
      complete: () => {
        this.customerService.getCustomers()
        window.location.reload()
        console.log('complete')
      }
    })
  }
}
