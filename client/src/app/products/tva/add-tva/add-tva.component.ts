import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { TVA } from '../tva';

@Component({
  selector: 'app-add-tva',
  templateUrl: './add-tva.component.html',
  styleUrls: ['./add-tva.component.css']
})
export class AddTvaComponent implements OnInit {
  tvaForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  values: any[] = []; 
  TVA:TVA=new TVA
  constructor(private formBuilder: FormBuilder, private productsService:ProductsService) { 
    this.tvaForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      value:["",Validators.pattern(/^\d+(\.\d{2})?$/)]
    }); 
  }
  ngOnInit(): void {
    this.show=false;
  }  
  closeAction(){
    this.show=false
  }

  submit(){ 

    this.productsService.addTva(this.tvaForm.value).subscribe(
      data=>{
  this.name= this.tvaForm.value['name']
 this.show=true  
      } 
    )  }
    reset(){
    
      this.disabled=false;
     
      this.TVA= new TVA()
      this.tvaForm.reset()
      this.show=false
      
    }

}
