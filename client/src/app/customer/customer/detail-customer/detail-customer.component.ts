import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent {
  data: any;
  number: any;
  id: number=1
  customer: Customer = new Customer()

  constructor(private customerService:CustomerService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.customerService.findACustomerById(this.id).subscribe(data=>{
    this.customer=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
