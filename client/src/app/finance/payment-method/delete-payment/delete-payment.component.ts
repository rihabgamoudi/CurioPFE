import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent implements OnInit {
  constructor(private financeService:FinanceService) { }
  @Input() 
  listPayment:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }

  
  deleteConfirm(){
    this.financeService.deletePayment(this.listPayment
    ).subscribe(
      res => {
        console.log("deletePayment",res)
        this.saved.emit(true);
      }  

    ); 
}
  
} 
