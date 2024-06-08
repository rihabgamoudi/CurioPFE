import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-price',
  templateUrl: './delete-price.component.html',
  styleUrls: ['./delete-price.component.css']
})
export class DeletePriceComponent {
  constructor(private productsService:ProductsService) { }
  @Input() 
  listPrice:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
  } 

  actionClose()
  {this.closed.emit(true) }

  deleteConfirm(){
    this.productsService.deletePrice(this.listPrice
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}

} 
