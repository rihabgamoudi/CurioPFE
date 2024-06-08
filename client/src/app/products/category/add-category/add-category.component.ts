import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent  implements OnInit{
 
  categoryForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false; 
  showAlert=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  category:Category= new Category()
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) { 
    this.categoryForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      status: ["", Validators.required],
      
    });
  }
  ngOnInit(): void { 
    this.show=false;
 
  } 
  closeAction(){
    this.show=false
  }
 

  submit(){ 

    this.productsService.addCategory(this.categoryForm.value).subscribe(
      data=>{
  this.name= this.categoryForm.value['name']
 this.show=true  
      }
    )  }
    reset(){
    
      this.disabled=false;
     
      this.category= new Category()
      this.categoryForm.reset()
      this.show=false
    }

}

 