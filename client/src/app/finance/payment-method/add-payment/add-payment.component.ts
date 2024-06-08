import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceRoutingModule } from '../../finance-routing.module';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {
  paymentForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  liste=["Cash","creditCards","debitCards","Checks","onlinePayments"]
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  constructor(private formBuilder: FormBuilder,private financeService:FinanceService) { 
    this.paymentForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      payment:[""]
      
    });
     
  }
  ngOnInit(): void {
    this.show=false;
  }
  
  closeAction(){
    this.show=false
  }
  submit(){ 

        this.financeService.addPayment(this.paymentForm.value).subscribe(
          data=>{
    this.name= this.paymentForm.value['name']
    this.show=true  
          }
        )  }
}
