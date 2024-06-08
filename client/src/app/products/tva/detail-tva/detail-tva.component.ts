import { Component, OnInit } from '@angular/core';
import { TVA } from '../tva';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-detail-tva',
  templateUrl: './detail-tva.component.html',
  styleUrls: ['./detail-tva.component.css']
})
export class DetailTvaComponent  implements OnInit{

  data: any;
  number: any;
  id: number=1
  Tva: TVA = new TVA()

  constructor(private productsService:ProductsService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.productsService.findTVAById(this.id).subscribe(data=>{
    this.Tva=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}

