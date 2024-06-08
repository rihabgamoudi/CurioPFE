import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Transaction } from '../transaction';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transactionForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  showAlert=false
  show: boolean=false;
  name: any;
  disabled: boolean=false;
  transaction:Transaction=new Transaction
  constructor(private formBuilder: FormBuilder,private FinanceService:FinanceService) { 
     
      this.transactionForm = this.formBuilder.group({
        nameForm: this.formBuilder.group({
          name: ["", Validators.required,],
          description: ["",], 
        }),
        stringStepper: this.formBuilder.group({
          ban: ["", Validators.required],
          checkNumber: ["", Validators.required],
          checkImage: ["", Validators.required],
        }),
        numberStepper: this.formBuilder.group({
          amount: ["", Validators.required],
          sourceId: ["",Validators.required],
          operationNumber: ["", Validators.required],
        }),

        bolleanStepper: this.formBuilder.group({
          isCompleted: ["", Validators.required],
          isCredit: ["", Validators.required],
          isOver: ["", Validators.required],
        }),
        date: this.formBuilder.group({
          dueDate: ["", Validators.required],
     
        }),
      });
      
      
  }
  ngOnInit(): void {
    this.show=false;
  }
  
  closeAction(){
    this.show=false
  }
  submit(){ 
    let transaction= new Transaction()
    const transactionName = this.transactionForm.get('nameForm.name')?.value;
    const transactionDescription = this.transactionForm.get('nameForm.description')?.value;
    this.transaction.name = transactionName;
    this.transaction.description = transactionDescription;
    const trabsactionban = this.transactionForm.get('stringStepper.ban')?.value;
    const transactionCheckNumber = this.transactionForm.get('stringStepper.checkNumber')?.value;
    const transactionCheckImage = this.transactionForm.get('stringStepper.checkImage')?.value;
    this.transaction.ban = trabsactionban;
    this.transaction.checkNumber = transactionCheckNumber;
    this.transaction.checkImage = transactionCheckImage;

    const trabsactionAmount = this.transactionForm.get('numberStepper.amount')?.value;
    const transactionSourceId = this.transactionForm.get('numberStepper.sourceId')?.value;
    const transactionOperationNumber = this.transactionForm.get('numberStepper.operationNumber')?.value;
    this.transaction.amount = trabsactionAmount;
    this.transaction.sourceId = transactionSourceId;
    this.transaction.operationNumber = transactionOperationNumber;
    
    const trabsactionIsCompleted = this.transactionForm.get('bolleanStepper.isCompleted')?.value;
    const transactionIsCredit = this.transactionForm.get('bolleanStepper.isCredit')?.value;
    const transactionIsOver = this.transactionForm.get('bolleanStepper.isOver')?.value;
    this.transaction.isCompleted = trabsactionIsCompleted;
    this.transaction.isCredit = transactionIsCredit;
    this.transaction.isOver = transactionIsOver;
    const transactionDueDate = this.transactionForm.get('date.dueDate')?.value;
    this.transaction.dueDate = transactionDueDate;


  

    this.FinanceService.addTransaction(this.transaction).subscribe(
      data=>{

this.show=true  
      }
    )  }
}
