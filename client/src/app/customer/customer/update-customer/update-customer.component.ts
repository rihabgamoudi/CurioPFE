import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  customerForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
 
  show: boolean=false;
  name: any; 
  disabled: boolean=false;
  id: number=0;
  isEmailDisabled=true
  isAdressDisabled=true;
  isTelephoneDisabled=true;
  isPictureDisabled=true;
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService  , private route:ActivatedRoute) { 
    this.customerForm = this.formBuilder.group({
      firstName: ["", Validators.required,],
      lastName: ["",Validators.required], 
    email: [{ value:''  ,disabled: this.isEmailDisabled},[Validators.required, Validators.email]],
      adress: [{ value:''  ,disabled: this.isAdressDisabled}, Validators.required],
      telephone: [{ value:''  ,disabled: this.isTelephoneDisabled}, Validators.required],
      picture: [{ value:''  ,disabled: this.isPictureDisabled}]
    });
      
  }
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCustomerById(this.id)
    });
   
  }
  getCustomerById(id:number){
    this.customerService.findACustomerById(id).subscribe(data=>{
      this.customerForm.get('firstName')?.setValue(data.firstName);
      this.customerForm.get('lastName')?.setValue(data.lastName);
      
    })
  } 
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
console.log("customer",this.customerForm.value)
    this.customerService.editCustomerById(this.id,this.customerForm.value).subscribe(
      data=>{
this.name= this.customerForm.value['name']
this.show=true  
      }
    )  }
}
