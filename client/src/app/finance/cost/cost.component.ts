import { Component } from '@angular/core';
import { Cost } from './cost';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent {
  data:any
  number: any;
  selected: any[] = []; 
  selectedCost:Cost[]=[]
  list:any
  show=false
 
  constructor(private formBuilder: FormBuilder,private FinanceService:FinanceService) {

     
  }
  ngOnInit(): void {
   this.getAllCost()
  }
  getAllCost(){
  this.FinanceService.getAllCost().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })
}
costSelect(event:any){

  console.log(" list",this.selectedCost.length)
 console.log("event",event)
 let list = this.selectedCost.map(x=>x.id )
 this.list=list
 console.log("listttt",this.list)
}
 
refresh(event:any)
{
  this.getAllCost()
  console.log("refresh",event)
}
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllCost()
  }
  save(){
    this.show=false
    this.getAllCost()
  }
}
