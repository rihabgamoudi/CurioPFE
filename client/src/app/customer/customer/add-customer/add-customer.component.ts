import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products/products.service';
import { CustomerService } from '../../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false 
 
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  customer:Customer=new Customer
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService) { 
    this.customerForm = this.formBuilder.group({
      firstName: ["", Validators.required,],
      lastName: ["",Validators.required], 
      email: ["", Validators.required],
      adress: ["", Validators.required],
      telephone: ["", Validators.required],
      picture: [""]
    });
     
  }
  ngOnInit(): void {
    this.show=false;
  }
   
  closeAction(){
    this.show=false
  }
  submit(){ 

    this.customerService.addCustomer(this.customerForm.value).subscribe(
      data=>{
this.name= this.customerForm.value['name']
this.show=true  
      }
    )  }

    reset(){
      this.disabled=false;
      this.customer= new Customer()
      this.customerForm.reset()
      this.show=false 
    }
  
}
