import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Accessoire } from './accessoire';

@Component({
  selector: 'app-accessoire',
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent  implements OnInit{
  data:any
  number: any;
  selected: any[] = []; 
  selectedAccessoire:Accessoire[]=[]
  list:any
  show=false 
  showALter: boolean=false
  message: string='';
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) { }
  ngOnInit(): void {
    this.getAllAccesoire()
  }
  
  getAllAccesoire(){
  this.productsService.getAllAccessoires().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })

}
accessoireSelect(event:any){

  console.log(" list",this.selectedAccessoire.length)

 let list = this.selectedAccessoire.map(x=>x.id )
 this.list=list
 this.id=this.selectedAccessoire[0].id
}
 
refresh(event:any)
{
  this.getAllAccesoire()
  console.log("refresh",event)
}

  showClick()
  {
    this.show=true
  } 
  close(){
    this.show=false
    this.getAllAccesoire()
  }
  save(){
    this.show=false

    this.getAllAccesoire()
    
  }
  
}
