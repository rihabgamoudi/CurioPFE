import { Component } from '@angular/core';
import { Product } from '../products/products/product';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { Commande } from './commande';
import { CommandeService } from './commande.service';
import { Transaction } from '../finance/transaction/transaction';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  data: any;
  number: any; 
  selected: any[] = []; 
  show=false
  transactions:Transaction=new Transaction()
 Commande:Commande[]=[]
  selectedCommande:Commande[]=[]
  list:any
  id: number | undefined;
  openCustomerIds: boolean=false;
  constructor(private formBuilder: FormBuilder,private commandeService:CommandeService) {
 
      
  } 
  ngOnInit(): void {  
   this.getAllCommande()

  } 
  getAllCommande(){
  this.commandeService.getAllCommande().subscribe(data=>{
   
    this.data=data[0]
    this.number=data[1]

  })  
}
openFilter(){
        
  this.openCustomerIds=true
}
updateIsValid(id: any): void {
  const commande = this.selectedCommande.find(r => r.id === id);
  if (commande) {
    this.commandeService.editCommandeById(id, { isValid: true }).subscribe(
      (data) => {
        commande.isValid = data.isValid;
        console.log("data",data)
        console.log(" commande.isValid", commande.isValid)
      },
      (error) => {
        console.error('Error updating commande:', error);
      }
    );
  }
}

commandSelect(event:any){ 

  
   let list = this.selectedCommande.map(x=>x.id )
   this.list=list
   this.id=this.selectedCommande[0].id
  
  }
   
  refresh(event:any)
  {
    this.getAllCommande()
  
  }
  showClick()
  { 
    this.show=true
  }
  close(){
    this.show=false
    this.getAllCommande()
  }
  save(){
    this.show=false
    this.getAllCommande()
  } 

}
 