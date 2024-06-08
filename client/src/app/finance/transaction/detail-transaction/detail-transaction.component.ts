import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css']
})
export class DetailTransactionComponent {
  data: any;
  number: any;
  id: number=1
  transaction: Transaction = new Transaction()

  constructor(private FinanceService:FinanceService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.FinanceService.findTransactionById(this.id).subscribe(data=>{
    this.transaction=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
