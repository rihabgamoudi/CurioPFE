import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  constructor(private productsService:ProductsService) { }
  @Input() 
  listProduct:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
  } 
 
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.productsService.deleteProduct(this.listProduct
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
 
}
