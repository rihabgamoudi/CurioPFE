import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Mark } from './mark';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit{
  data: any;
  number: any; 
  selected: any[] = []; 
  show=false
  selectedMark:Mark[]=[] 
  list:any
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) {

     
  }  
  
  ngOnInit(): void {
   this.getAllMark()
  } 
  getAllMark(){
  this.productsService.getAllMarks().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })   
  
}
  
  
  
 
  markSelect(event:any){
   let list = this.selectedMark.map(x=>x.id )
   this.list=list
   this.id=this.selectedMark[0].id
  }
   
  refresh(event:any)
  {
    this.getAllMark()
    console.log("refresh",event)
  }
  
    showClick()
    {
      this.show=true
    } 
    close(){
      this.show=false
      this.getAllMark()
    }
    save(){
      this.show=false
      this.getAllMark()
    } 
    
}
