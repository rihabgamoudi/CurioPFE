import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder } from '@angular/forms';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: any;
  number: any; 
  selected: any[] = []; 
  show=false
  selectedCategory:Category[]=[]
  list:any
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) {

     
  } 
  
  ngOnInit(): void {
   this.getAllCategory()
  } 
  getAllCategory(){
  this.productsService.getAllCategory().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
  
}
  
  
  categorySelect(event:any){

    

   let list = this.selectedCategory.map(x=>x.id )
   this.list=list
   this.id=this.selectedCategory[0].id
   
  }  
    
  refresh(event:any)
  {
    this.getAllCategory()
    console.log("refresh",event)
  }
  
    showClick()
    {
      this.show=true
    } 
    close(){
      this.show=false
      this.getAllCategory()
    }
    save(){
      this.show=false
      this.getAllCategory()
    }
     
  }
 