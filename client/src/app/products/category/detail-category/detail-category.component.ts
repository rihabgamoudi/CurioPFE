import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit{
  data: any;
  number: any;
  id: number=1
  category: Category = new Category()

  constructor(private productsService:ProductsService) {

     
  }
ngOnInit(): void {
  this.id=1
  this.productsService.findCategoryById(this.id).subscribe(data=>{
    this.category=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
