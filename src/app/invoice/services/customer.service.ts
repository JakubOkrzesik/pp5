import { Injectable } from '@angular/core'
import { Customer } from '../models/customer'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable, map } from 'rxjs'
import { environment } from '../../../environments/environment.development'

@Injectable()
export class CustomerService {
  constructor (private http: HttpClient) {}

  addCustomer (customer: Customer): any {
    return this.http.post(
      `${environment.url}${environment.student_id}/customers/`,
      customer
    )
  }

  getCustomers (): Observable<Customer[]> {
    return this.http
      .get<string>(`${environment.url}${environment.student_id}/customers/`)
      .pipe(
        map((data: any) => {
          return data.map((item: any) => new Customer().deserialize(item))
        })
      )
  }

  removeCustomer (customer: Customer): any {
    const headers = new HttpHeaders({
      Authorization: 'haslo_haslo'
    })

    return this.http.delete(
      `${environment.url}${environment.student_id}/customers/${customer.nip}`,
      { headers }
    )
  }
}
