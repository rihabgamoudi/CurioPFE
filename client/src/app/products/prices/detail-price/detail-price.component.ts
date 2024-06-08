import { Component, OnInit } from '@angular/core';
import { Price } from '../prices';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-detail-price',
  templateUrl: './detail-price.component.html',
  styleUrls: ['./detail-price.component.css']
})
export class DetailPriceComponent  implements OnInit{
  data: any;
  number: any;
  id: number=1
  price: Price = new Price()

  constructor(private productsService:ProductsService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.productsService.findPriceById(this.id).subscribe(data=>{
    this.price=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
