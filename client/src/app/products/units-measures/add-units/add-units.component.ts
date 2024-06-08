import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Units } from '../units';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {
  unitsForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  units:Units=new Units
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) { 
    this.unitsForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      type: ["", Validators.required],
      value:["", Validators.required],
      
    });
  } 
  ngOnInit(): void {
    this.show=false;
  }  
  closeAction(){
    this.show=false
  }

  submit(){ 

    this.productsService.addUnits(this.unitsForm.value).subscribe(
      data=>{
  this.name= this.unitsForm.value['name']
 this.show=true  
      } 
    )  }

    reset(){
    
      this.disabled=false;
     
      this.units= new Units()
      this.unitsForm.reset()
      this.show=false
    }

}
