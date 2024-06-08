import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FinanceService } from '../finance.service';
import { Payment } from './payment';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit{
  data:any
  number: any;
  selected: any[] = []; 
  show=false
  idPayment=1
  selectedPayment:Payment[]=[]
  list:any
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private financeService:FinanceService) {

     
  }
  ngOnInit(): void {
    this.getAllPayment()
   }
   getAllPayment(){
   this.financeService.getAllPayment().subscribe(data=>{
     console.log('data',data)
     this.data=data[0]
     this.number=data[1]
 
   })
 }


 payementySelect(event:any){
  let list = this.selectedPayment.map(x=>x.id )
  this.list=list
  this.id=this.selectedPayment[0].id
 }
  refresh(event:any) 
{
  this.getAllPayment()
  
}
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllPayment()
  }
  save(){
    this.show=false
    this.getAllPayment()
  }
  

  
}
