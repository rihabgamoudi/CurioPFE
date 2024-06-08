import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-tva',
  templateUrl: './delete-tva.component.html',
  styleUrls: ['./delete-tva.component.css']
})
export class DeleteTvaComponent  implements OnInit{
  constructor(private productsService:ProductsService) { }
  @Input() 
  listTVA:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.productsService.deleteTVA(this.listTVA
    ).subscribe( 
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
}
 