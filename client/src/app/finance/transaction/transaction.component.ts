import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../finance.service';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  data:any
  number: any;
  selected: any[] = []; 
  selectedTransaction:Transaction[]=[]
  list:any
  show=false
  id: number | undefined;
 
  constructor(private formBuilder: FormBuilder,private FinanceService:FinanceService) {
 
     
  }
  ngOnInit(): void {
   this.getAllTransaction()
  }
  getAllTransaction(){
  this.FinanceService.getAllTransaction().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })
}
transactionSelect(event:any){
 let list = this.selectedTransaction.map(x=>x.id )
 this.list=list
 this.id=this.selectedTransaction[0].id
}
 
refresh(event:any) 
{
  this.getAllTransaction()
  console.log("refresh",event)
}
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllTransaction()
  }
  save(){
    this.show=false
    this.getAllTransaction()
  }
  
}
