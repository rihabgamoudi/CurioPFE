import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FinanceService } from '../../finance.service';

@Component({
  selector: 'app-delete-cost',
  templateUrl: './delete-cost.component.html',
  styleUrls: ['./delete-cost.component.css']
})
export class DeleteCostComponent implements OnInit {
  constructor(private financeService:FinanceService) { }
  @Input() 
  listCost:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.financeService.deleteCost(this.listCost
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
}
