import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../../finance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cost',
  templateUrl: './update-cost.component.html',
  styleUrls: ['./update-cost.component.css']
})
export class UpdateCostComponent  implements OnInit{
  costForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  id: number=4;
  constructor(private formBuilder: FormBuilder,private financeService:FinanceService,private route:ActivatedRoute) { 
    this.costForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""], 
      montant: ["", Validators.required],
 
    });
     
  }
  ngOnInit(): void {
    this.show=false;
    this.id = +this.route.snapshot.params['id'];
  }
  
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id=4
console.log("cost",this.costForm.value)
    this.financeService.editCostById( this.id,this.costForm.value).subscribe(
      data=>{
this.name= this.costForm.value['name']
this.show=true  
      }
    )  }
}
