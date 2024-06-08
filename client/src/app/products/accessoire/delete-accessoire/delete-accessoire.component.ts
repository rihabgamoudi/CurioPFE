import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Accessoire } from '../accessoire';

@Component({
  selector: 'app-delete-accessoire',
  templateUrl: './delete-accessoire.component.html',
  styleUrls: ['./delete-accessoire.component.css']
})
export class DeleteAccessoireComponent implements OnInit {
  message: string='';
  constructor(private productsService:ProductsService) { }
  accessoire:Accessoire[]=[]
  accessoireToDelete: any;
  @Input() 
  listAccessoire:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  @Output()  error= new EventEmitter<boolean>()
  ngOnInit(): void {
  console.log(this.listAccessoire)
  }
  actionClose() 
  {this.closed.emit(true) }

  deleteConfirm(){
    this.productsService.deleteAccessoire(this.listAccessoire
    ).subscribe(
      data => {
       console.log("data",data)
        // console.log(typeof(data))
   
        // let
        // if(res==true){
        // this.message='Are you sure you want to delete this item? This action is irreversible.' ,this.listAccessoire
       
        // }  
        // else{
        // this.message
        // } 
        if( typeof data==='boolean'&& data ===true){
          console.log("deleteAccessoire",data)
          this.saved.emit(true);
        } else{
          this.error.emit(true)
        }

     
       }
      
    );
}
  
  
}
