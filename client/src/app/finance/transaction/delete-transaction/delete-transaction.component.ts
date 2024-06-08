import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent implements OnInit {
  constructor(private financeService:FinanceService) { }
  @Input() 
  listTransaction:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  } 
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.financeService.deleteTransaction(this.listTransaction
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
} 
