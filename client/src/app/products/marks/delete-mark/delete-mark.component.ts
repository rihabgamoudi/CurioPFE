import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-mark',
  templateUrl: './delete-mark.component.html',
  styleUrls: ['./delete-mark.component.css']
})
export class DeleteMarkComponent  implements OnInit{
   
  constructor(private productsService:ProductsService) { }
  @Input() 
  listMark:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
    
  } 
  
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.productsService.deleteMark(this.listMark
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
  }
 