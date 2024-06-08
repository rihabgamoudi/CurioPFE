import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  constructor(private customerService:CustomerService) { }
  @Input() 
  listCustomer:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.customerService.deleteCustomer(this.listCustomer
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
} 
