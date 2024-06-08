import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Accessoire } from '../accessoire';

@Component({
  selector: 'app-detail-accessoire',
  templateUrl: './detail-accessoire.component.html',
  styleUrls: ['./detail-accessoire.component.css']
})
export class DetailAccessoireComponent implements OnInit
{
  data: any;
  number: any;
  id: number=35
  accessoire: Accessoire = new Accessoire()

  constructor(private productsService:ProductsService) {

     
  }
ngOnInit(): void {
  this.id=35
  this.productsService.findAccessoireById(this.id).subscribe(data=>{
    this.accessoire=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
