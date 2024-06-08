import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  getAllCustomer() :Observable<any>{
    return this.http.get(this.apiUrl+'customer/customer-list') as Observable<[Customer[],number]>;
  }
  addCustomer( customer:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.apiUrl+'customer/create',customer) as Observable <Customer>
  }
  editCustomerById(ID: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(this.apiUrl+ 'customer/' + JSON.stringify(ID), customer);
  }
  findACustomerById(ID: number):Observable<any>{
    return this.http.get<Customer>(this.apiUrl+ 'customer/' + JSON.stringify(ID))
  }
  deleteCustomer( customer:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.apiUrl+'customer/delete-multiple',customer) as Observable <Customer>
  }

}
