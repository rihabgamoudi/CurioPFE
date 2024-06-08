import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommandeService } from '../../commande.service';

@Component({
  selector: 'app-delete-commande',
  templateUrl: './delete-commande.component.html',
  styleUrls: ['./delete-commande.component.css']
})
export class DeleteCommandeComponent  implements OnInit{
  constructor(private commandeService:CommandeService) { }
  @Input() 
  listCommand:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {  
  } 
 
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.commandeService.deleteCommande(this.listCommand
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
}
