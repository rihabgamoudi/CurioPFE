import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  products: any[] = [
    { id: 1, category: '', price:'', caracteristique: '' },
    { id: 2, category: '', price:'', caracteristique: '' },
   
  ];
  clickProduct:any[];
  constructor(){
    this.clickProduct=this.products;
  }
}
