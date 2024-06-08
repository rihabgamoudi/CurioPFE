import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-units',
  templateUrl: './update-units.component.html',
  styleUrls: ['./update-units.component.css']
})
export class UpdateUnitsComponent  implements OnInit{
  unitsForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  id: number=0; 
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService, private route:ActivatedRoute) { 
    this.unitsForm = this.formBuilder.group({
      name: ["", Validators.required,],
      description: [""], 
      type: [""],
      value:[""],
      
    });
  } 
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getUnitsById(this.id)
    });
   
  }
  getUnitsById(id:number){
    this.productsService.findUnitsById(id).subscribe(data=>{
      this.unitsForm.get('name')?.setValue(data.name);
      this.unitsForm.get('description')?.setValue(data.description);
      this.unitsForm.get('type')?.setValue(data.type); 
      this.unitsForm.get('value')?.setValue(data.value); 
      this.unitsForm.patchValue(data)
      
    })
  } 

  closeAction(){
    this.show=false
  }
 
  submit(){ 
    this.id
    this.productsService.editUnitsById(this.id,this.unitsForm.value).subscribe(
      data=>{
  this.name= this.unitsForm.value['name']
 this.show=true  
      } 
    )  }
    
}
