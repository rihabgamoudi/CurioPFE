import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DevisService } from '../devis.service';

@Component({
  selector: 'app-delete-devis',
  templateUrl: './delete-devis.component.html',
  styleUrls: ['./delete-devis.component.css']
})
export class DeleteDevisComponent {
  constructor(private devisService:DevisService) { }
  @Input() 
  listDevis:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
  } 
 
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.devisService.deleteDevis(this.listDevis
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
}
