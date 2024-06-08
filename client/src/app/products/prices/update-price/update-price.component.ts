import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent implements OnInit{
  priceForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false;  
  name: any;
  disabled: boolean=false;
  id: number=1; 
  constructor(private formBuilder: FormBuilder, private productsService:ProductsService, private route:ActivatedRoute) { 
    this.priceForm = this.formBuilder.group({
      
      priceExcludingTax: ["", Validators.required],
      priceTTC:["", Validators.required],
      retailPrice: ["", Validators.required],
      wholesalePrice:["", Validators.required],
      
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
    this.productsService.findPriceById(id).subscribe(data=>{
      this.priceForm.get('priceExcludingTax')?.setValue(data.priceExcludingTax);
      this.priceForm.get('priceTTC')?.setValue(data.priceTTC);
      this.priceForm.get('retailPrice')?.setValue(data.retailPrice); 
      this.priceForm.get('wholesalePrice')?.setValue(data.wholesalePrice); 
      this.priceForm.patchValue(data)
      
      // this.form.patchValue(data)
      
    })
  }
  closeAction(){
    this.show=false
  }

  submit(){ 
    this.id
    this.productsService.editPriceById(this.id,this.priceForm.value).subscribe(
      data=>{
  this.name= this.priceForm.value['name']
 this.show=true  
      }
    )  }
}
