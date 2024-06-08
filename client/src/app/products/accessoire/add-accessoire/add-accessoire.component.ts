import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Accessoire } from '../accessoire';

@Component({
  selector: 'app-add-accessoire',
  templateUrl: './add-accessoire.component.html',
  styleUrls: ['./add-accessoire.component.css']
})
export class AddAccessoireComponent implements OnInit{
  
  accessoireForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  liste=["métalliques","organiques","minéraux","plastiques","composites"]
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  accessoire:Accessoire= new Accessoire()
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) { 
    this.accessoireForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      status: ["", Validators.required],
      // compatibilite: ["", Validators.required],
      materiaux: ["", Validators.required],
    });
     
  }
  ngOnInit(): void {
    this.show=false;
  }
   
  closeAction(){
    this.show=false
  }
  submit(){ 
console.log("accesoire",this.accessoireForm.value)
    this.productsService.addAccessoire(this.accessoireForm.value).subscribe(
      data=>{
this.name= this.accessoireForm.value['name']
this.show=true  
      }
    )  }
    reset(){
    
      this.disabled=false;
     
      this.accessoire= new Accessoire()
      this.accessoireForm.reset()
      this.show=false
    }

}
