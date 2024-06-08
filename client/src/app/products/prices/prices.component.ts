import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Price } from './prices';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  data: any;
  number: any; 
  selected: any[] = []; 
  selectedPrice:Price[]=[]
  list:any
  show=false
  id: number | undefined;
  
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) {

     
  } 
  ngOnInit(): void { 
  this.getAllPrice()
  }  
  getAllPrice(){
     this.productsService.getAllPrices().subscribe(data=>{
      console.log('data',data)
     this.data=data[0]
     this.number=data[1]

      }) 
   }
   selectPrice(event:any){

  
   let list = this.selectedPrice.map(x=>x.id )
   this.list=list
   this.id=this.selectedPrice[0].id
  }
   
  refresh(event:any)
  {
    this.getAllPrice()
    console.log("refresh",event)
  }
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllPrice()
  }
  save(){
    this.show=false
    this.getAllPrice()
  }
}
 