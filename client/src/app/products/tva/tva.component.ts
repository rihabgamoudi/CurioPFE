import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { TVA } from './tva';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent {
  data: any;
  number: any; 
  selected: any[] = []; 
  selectedTVA:TVA[]=[]
  list:any
  show=false
  id: number | undefined;
  constructor( private productsService:ProductsService ){}

  ngOnInit(): void {
   this.getAllTva() 
  } 
  getAllTva(){
  this.productsService.getAllTva().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
} 
TVASelect(event:any){

 let list = this.selectedTVA.map(x=>x.id )
 this.list=list
 this.id=this.selectedTVA[0].id
 
}
 
refresh(event:any)
{
  this.getAllTva()
  console.log("refresh",event)
}


showClick()
{
  this.show=true
}
close(){
  this.show=false
  this.getAllTva()
}
save(){
  this.show=false
  this.getAllTva()
} 
  

} 
