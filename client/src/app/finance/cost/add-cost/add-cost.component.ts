import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrls: ['./add-cost.component.css']
})
export class AddCostComponent implements OnInit {
  costForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  constructor(private formBuilder: FormBuilder,private financeService:FinanceService) { 
    this.costForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      montant: ["", Validators.required],
 
    });
     
  }
  ngOnInit(): void {
    this.show=false;
  }
  // openChangeAccessoire(open: any) {
  //   this.productDetail.accessoireId= open.model.id
  // }
  // getAccessoire(){
  //   this.financeService.getAllAccessoires().subscribe(data=>{
    
  //     this.dataCost=data[0]
  //   })
  //  }
   
  closeAction(){
    this.show=false
  }
  submit(){ 
console.log("accesoire",this.costForm.value)
    this.financeService.addCost(this.costForm.value).subscribe(
      data=>{
this.name= this.costForm.value['name']
this.show=true  
      }
    )  }
}
