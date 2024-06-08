import { Component } from '@angular/core';
import { Devis } from './devis';
import { FormBuilder } from '@angular/forms';
import { DevisService } from './devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {

  data: any;
  number: any; 
  selected: any[] = [];
  show=false
 
  selectedDevis:Devis[]=[]
  list:any
  id: number | undefined;
  constructor(private formBuilder: FormBuilder,private devisService:DevisService) {
 
      
  } 
  ngOnInit(): void {  
   this.getAllDevis()

  } 
  getAllDevis(){
  this.devisService.getAllDevis().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
}
devisSelect(event:any){
   let list = this.selectedDevis.map(x=>x.id )
   this.list=list
   this.id=this.selectedDevis[0].id
  console.log(this.selectedDevis[0].id)
  }

  refresh(event:any)
  {
    this.getAllDevis()
  
  }
  showClick()
  { 
    this.show=true
  }
  close(){
    this.show=false
    this.getAllDevis()
  }
  save(){
    this.show=false
    this.getAllDevis()
  } 

}
 
