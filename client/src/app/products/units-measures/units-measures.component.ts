import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Units } from './units';

@Component({
  selector: 'app-units-measures',
  templateUrl: './units-measures.component.html',
  styleUrls: ['./units-measures.component.css']
})
export class UnitsMeasuresComponent {
  data: any;
  number: any; 
  show=false
 
  selected: any[] = [];
  selectedUnits:Units[]=[]
  list:any
  id: number | undefined;
  constructor( private productsService:ProductsService ){}

  ngOnInit(): void {
    this. getAllUnits()
  } 

  getAllUnits(){
  this.productsService.getAllUnits().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
} 
unitsSelect(event:any){
 let list = this.selectedUnits.map(x=>x.id )
 this.list=list
   this.id=this.selectedUnits[0].id
}
 
refresh(event:any)
{
  
  this.getAllUnits()
  
}
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    
  this.getAllUnits()
  }
  save(){
    this.show=false
    this.getAllUnits()
  } 
  }