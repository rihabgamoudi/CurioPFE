import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  implements OnInit{
  data:any
  number: any;
  selected: any[] = []; 
  selectedCustomer:Customer[]=[]
  list:any
  show=false
  id: number | undefined;

 
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService) {

      
  }
  ngOnInit(): void {
  this.getAllCustomer()
}
getAllCustomer(){
this.customerService.getAllCustomer().subscribe(data=>{
  console.log('data',data)
  this.data=data[0]
  this.number=data[1]

})
}

userSelect(event:any){

 let list = this.selectedCustomer.map(x=>x.id )
 this.list=list
 this.id=this.selectedCustomer[0].id
} 
 
refresh(event:any)
{
  this.getAllCustomer()
  console.log("refresh",event)
}

showClick()
{
  this.show=true
}
close(){
  this.show=false
  this.getAllCustomer()
}
save(){
  this.show=false
  this.getAllCustomer()
}
}
