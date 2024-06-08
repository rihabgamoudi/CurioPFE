import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessoire } from './accessoire/accessoire';

import { Category } from './category/category';
import { Mark } from './marks/mark';
import { Price } from './prices/prices';
import { TVA } from './tva/tva';
import { Units } from './units-measures/units';
import { Product } from './products/product';
import { Picture } from './products/picture';

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 
  enregistrerDonnees(formData: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // Accessoire
  getAllAccessoires() :Observable<any>{
    return this.http.get(this.apiUrl+'accessoire/accessory-list') as Observable<[Accessoire[],number]>;
  }
  addAccessoire( accessoire:Accessoire):Observable<Accessoire>
  {
    return this.http.post<Accessoire>(this.apiUrl+'accessoire/create',accessoire) as Observable <Accessoire>
  }
  editAcccesoiresById(ID: number, accessoire: Accessoire): Observable<Accessoire> {
    return this.http.patch<Accessoire>(this.apiUrl+ 'accessoire/' + JSON.stringify(ID), accessoire);
  }
  findAccessoireById(ID: number):Observable<any>{
    return this.http.get<Accessoire>(this.apiUrl+ 'accessoire/' + JSON.stringify(ID))
  }
  deleteAccessoire( accessoire:Accessoire):Observable<Accessoire>
  {
    return this.http.post<Accessoire>(this.apiUrl+'accessoire/delete-multiple',accessoire) as Observable <Accessoire>
  }


  // category
  
  addCategory(category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.apiUrl+'category/create',category) as Observable <Category>
  }
  getAllCategory() :Observable<any>{
    return this.http.get(this.apiUrl+'category/category-list') as Observable<[Category[],number]>;
  }
  editCategoryById(ID: number, category: Category): Observable<Category> {
    return this.http.patch<Category>(this.apiUrl+ 'category/' + JSON.stringify(ID), category);
  }
  findCategoryById(ID: number):Observable<any>{
    return this.http.get<Category>(this.apiUrl+ 'category/' + JSON.stringify(ID))
  }
  deleteCategory( category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.apiUrl+'category/delete-multiple',category) as Observable <Category>
  }
  // marks
  addMark(mark:Mark):Observable<Mark>
  {
    return this.http.post<Mark>(this.apiUrl+'marks/create',mark) as Observable <Mark>
  }
  getAllMarks() :Observable<any>{
    return this.http.get(this.apiUrl+'marks/marks-list') as Observable<[Category[],number]>;
  }
  editMarksById(ID: number, mark: Mark): Observable<Mark> {
    return this.http.patch<Mark>(this.apiUrl+ 'marks/' + JSON.stringify(ID), mark);
  }
  findMarksById(ID: number):Observable<any>{
    return this.http.get<Mark>(this.apiUrl+ 'marks/' + JSON.stringify(ID))
  }
  deleteMark( mark:Mark):Observable<Mark>
  {
    return this.http.post<Mark>(this.apiUrl+'marks/delete-multiple',mark) as Observable <Mark>
  }
  // price
  addPrice(price:Price):Observable<Price>
  {
    return this.http.post<Price>(this.apiUrl+'price/create',price) as Observable <Price>
  }
  getAllPrices() :Observable<any>{
    return this.http.get(this.apiUrl+'price/price-list') as Observable<[Price[],number]>;
  }
  editPriceById(ID: number, price: Price): Observable<Price> {
    return this.http.patch<Price>(this.apiUrl+ 'price/' + JSON.stringify(ID), price);
  }
  findPriceById(ID: number):Observable<any>{
    return this.http.get<Price>(this.apiUrl+ 'price/' + JSON.stringify(ID))
  }
  deletePrice( price:Price):Observable<Price>
  {
    return this.http.post<Price>(this.apiUrl+'price/delete-multiple',price) as Observable <Price>
  }
  // tva
  getAllTva() :Observable<any>{
    return this.http.get(this.apiUrl+'tva/tva-list') as Observable<[TVA[],number]>;
  }
  addTva( tva:TVA):Observable<TVA>
  {
    return this.http.post<TVA>(this.apiUrl+'tva/create',tva) as Observable <TVA>
  }
  editTVAById(ID: number, tva: TVA): Observable<TVA> {
    return this.http.patch<TVA>(this.apiUrl+ 'tva/' + JSON.stringify(ID), tva);
  }
  findTVAById(ID: number):Observable<any>{
    return this.http.get<TVA>(this.apiUrl+ 'tva/' + JSON.stringify(ID))
  }
  deleteTVA( tva:TVA):Observable<TVA>
  {
    return this.http.post<TVA>(this.apiUrl+'tva/delete-multiple',tva) as Observable <TVA>
  }
  //Units
  getAllUnits() :Observable<any>{
    return this.http.get(this.apiUrl+'units-measures/units-list') as Observable<[Units[],number]>;
  }
  addUnits( units:Units):Observable<Units>
  {
    return this.http.post<Units>(this.apiUrl+'units-measures/create',units) as Observable <Units>
  }
  editUnitsById(ID: number, units: Units): Observable<Units> {
    return this.http.patch<Units>(this.apiUrl+ 'units-measures/' + JSON.stringify(ID), units);
  }
  findUnitsById(ID: number):Observable<any>{
    return this.http.get<Units>(this.apiUrl+ 'units-measures/' + JSON.stringify(ID))
  }
  deleteUnits( units:Units):Observable<Units>
  {
    return this.http.post<Units>(this.apiUrl+'units-measures/delete-multiple',units) as Observable <Units>
  }

   //products
   getAllProducts() :Observable<any>{
    return this.http.get(this.apiUrl+'products/products-list') as Observable<[Product[],number]>;
  }
  addProduct( product:Product):Observable<Product>
  {
    return this.http.post<Product>(this.apiUrl+'products/create',product) as Observable <Product>
  }
  
  editProductsById(ID: number, product: Product): Observable<Product> {
    return this.http.patch<Product>(this.apiUrl+ 'products/' + JSON.stringify(ID), product);
  }
  findProductsById(ID: number):Observable<any>{
    return this.http.get<Product>(this.apiUrl+ 'products/' + JSON.stringify(ID))
  }
  deleteProduct( product:Product):Observable<Product>
  {
    return this.http.post<Product>(this.apiUrl+'products/delete-multiple',product) as Observable <Product>
  }
  // 
  addDetailProduct( detailProduct:Product):Observable<Product>
  {
    return this.http.post<Product>(this.apiUrl+'details/create',detailProduct) as Observable <Product>
  }
  getAllDeatlisProducts() :Observable<any>{
    return this.http.get(this.apiUrl+'details/details-list') as Observable<[Product[],number]>;
  }
 
  addPicture( picture:Picture):Observable<Picture>
  {
    return this.http.post<Picture>(this.apiUrl+'pictures/add-picture',picture) as Observable <Picture>
  }
}

