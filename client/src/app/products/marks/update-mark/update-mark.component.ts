import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-mark',
  templateUrl: './update-mark.component.html',
  styleUrls: ['./update-mark.component.css']
})
export class UpdateMarkComponent implements OnInit {
  markForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false; 
  name: any; 
  disabled: boolean=false;
  id: number=0;
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService, private route:ActivatedRoute) { 
    this.markForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""], 
      status: ["", ],
      image:["", ],
      
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
    this.productsService.findMarksById(id).subscribe(data=>{
     
      this.markForm.get('name')?.setValue(data.name);
      this.markForm.get('description')?.setValue(data.description);
      this.markForm.get('status')?.setValue(data.status);
     
      this.markForm.get('image')?.setValue(data.image);

     
      this.markForm.patchValue(data)
      
     
      
    })
  } 
  closeAction(){
    this.show=false
  }

  submit(){ 
    this.id
    this.productsService.editMarksById(this.id,this.markForm.value).subscribe(
      data=>{
  this.name= this.markForm.value['name']
 this.show=true  
      } 
    )  }
}
