import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any;
  number: any; 
  selected: any[] = [];
  show=false
 
  selectedProduct:Product[]=[]
  list:any
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) {
 
      
  } 
  ngOnInit(): void {  
   this.getAllProducts()

  } 
  getAllProducts(){
    this.productsService.getAllProducts().subscribe(data => {
      console.log('data', data);
      this.data = data[0];
      this.number = data[1];
    }, error => {
      console.error('Error fetching products:', error);
    });
}
   productSelect(event:any){

    

   let list = this.selectedProduct.map(x=>x.id )
   this.list=list
   this.id=this.selectedProduct[0].id
  
  }
   
  refresh(event:any)
  {
    this.getAllProducts()
    
  }
  showClick()
  { 
    this.show=true
  }
  close(){
    this.show=false
    this.getAllProducts()
  }
  save(){
    this.show=false
    this.getAllProducts()
  } 
}
