import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  id: number=0;

  constructor(private formBuilder: FormBuilder,private productsService:ProductsService, private route:ActivatedRoute) { 
    this.categoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""], 
      status: [""],
      
    }); 
  }
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCategoryById(this.id)
    });
   
  }
  getCategoryById(id:number){
    this.productsService.findCategoryById(id).subscribe(data=>{
     console.log("data",data.status)
     console.log("data",data.description)
     console.log("data",data.name)
      this.categoryForm.get('name')?.setValue(data.name);
      this.categoryForm.get('description')?.setValue(data.description);
      this.categoryForm.get('status')?.setValue(data.status); 
      this.categoryForm.patchValue(data)
      
      // this.form.patchValue(data)
      
    })
  }
  closeAction(){
    this.show=false
    
  }
  

  submit(){ 
    this.id
    this.productsService.editCategoryById(this.id,this.categoryForm.value).subscribe(
      data=>{
  this.name= this.categoryForm.value['name']
 this.show=true  
      }
    )  }
}
  