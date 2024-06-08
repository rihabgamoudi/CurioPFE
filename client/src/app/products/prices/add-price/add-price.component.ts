import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Price } from '../prices';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent  implements OnInit{
  priceForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false;
  show: boolean=false;  
  name: any; 
  disabled: boolean=false;
  price:Price= new Price()
  constructor(private formBuilder: FormBuilder, private productsService:ProductsService) { 
    this.priceForm = this.formBuilder.group({
      name:["",Validators.required],
      priceExcludingTax: ["", Validators.required],
      priceTTC:["", Validators.required],
      retailPrice: ["", Validators.required],
      wholesalePrice:["", Validators.required],
      
    });
  } 
  ngOnInit(): void {
    this.show=false;

  } 
  closeAction(){
    this.show=false
  }

  submit(){ 

    this.productsService.addPrice(this.priceForm.value).subscribe(
      data=>{
  this.name= this.priceForm.value['name']
 this.show=true  
      }
    )  }
    reset(){
    
      this.disabled=false;
     
      this.price= new Price()
      this.priceForm.reset()
      this.show=false
    }
}
