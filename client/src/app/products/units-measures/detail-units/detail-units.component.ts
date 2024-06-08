import { Component } from '@angular/core';
import { Units } from '../units';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-detail-units',
  templateUrl: './detail-units.component.html',
  styleUrls: ['./detail-units.component.css']
})
export class DetailUnitsComponent {
  data: any;
  number: any;
  id: number=1
  units: Units = new Units()

  constructor(private productsService:ProductsService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.productsService.findUnitsById(this.id).subscribe(data=>{
    this.units=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
