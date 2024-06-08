import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  constructor(private productsService:ProductsService) { }
  @Input() 
  listCategory:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
    
  } 

  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.productsService.deleteCategory(this.listCategory
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
}   