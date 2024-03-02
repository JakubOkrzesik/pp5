import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: false,
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router: Router){
    this.customerService = customerService
    this.router = router
  }
  onSubmit(formData: NgForm){
    if(!formData.valid){
      console.log("Invalid form contents")
      
    }
    else{
      console.log(this.customer)
      this.customerService.addCustomer(this.customer)
        .subscribe(
        {
          next: (data: any) => {
            console.log(data)
          },
          error: (error: any) => {
            console.error(error)
          }
        }
      )
      this.router.navigate(["invoice/customer/list"])
    }
  }
}
