import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-tva',
  templateUrl: './update-tva.component.html',
  styleUrls: ['./update-tva.component.css']
})
export class UpdateTvaComponent implements OnInit {
  tvaForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false; 
  values: any[] = []; 
  id: number=0;
  constructor(private formBuilder: FormBuilder, private productsService:ProductsService , private route:ActivatedRoute) { 
    this.tvaForm = this.formBuilder.group({
      name: ["", Validators.required,],
      description: [""], 
      value:["",Validators.pattern(/^\d+(\.\d{2})?$/)]
    });
  }
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getTVAById(this.id)
    });
   
  }
  getTVAById(id:number){
    this.productsService.findTVAById(id).subscribe(data=>{
      this.tvaForm.get('name')?.setValue(data.name);
      this.tvaForm.get('description')?.setValue(data.description);
      this.tvaForm.get('status')?.setValue(data.value); 
      this.tvaForm.patchValue(data)
      
    })
  } 
  closeAction(){
    this.show=false
  }

  submit(){ 
    this.id
    this.productsService.editTVAById( this.id,this.tvaForm.value).subscribe(
      data=>{
  this.name= this.tvaForm.value['name']
 this.show=true  
      } 
    )  }
}
