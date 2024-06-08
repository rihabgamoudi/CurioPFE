import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-units',
  templateUrl: './delete-units.component.html',
  styleUrls: ['./delete-units.component.css']
})
export class DeleteUnitsComponent implements OnInit {
  constructor(private productsService:ProductsService) { }
  @Input() 
  listUnits:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }

  deleteConfirm(){
    this.productsService.deleteUnits(this.listUnits
    ).subscribe( 
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }  

    ); 
}
}
 