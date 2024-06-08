import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Params, Route } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-accessoire',
  templateUrl: './update-accessoire.component.html',
  styleUrls: ['./update-accessoire.component.css']
})
export class UpdateAccessoireComponent implements OnInit {
    
  accessoireForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  
  liste=["métalliques","organiques","minéraux","plastiques","composites"]
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  id: number=8;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService , private route:ActivatedRoute) { 
    this.accessoireForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""], 
      status: ["", ],
      // compatibilite: ["", Validators.required],
      materiaux: ["", ],
    });
     
  }
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getAccessoireById(this.id)
    });
   
  }
  getAccessoireById(id:number){
    this.productsService.findAccessoireById(id).subscribe(data=>{
     
      this.accessoireForm.get('name')?.setValue(data.name);
      this.accessoireForm.get('description')?.setValue(data.description);
      this.accessoireForm.get('status')?.setValue(data.status);
      this.accessoireForm.get('materiaux')?.setValue(data.materiaux);
     

     
      this.accessoireForm.patchValue(data)
      
      // this.form.patchValue(data)
      
    })
  }
  
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
  
    this.productsService.editAcccesoiresById(this.id,this.accessoireForm.value).subscribe(
      data=>{
this.name= this.accessoireForm.value['name']
this.show=true  
      }
    )  }

  }
