import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './payment-method/payment';
import { Observable } from 'rxjs';
import { Transaction } from './transaction/transaction';
import { Cost } from './cost/cost';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  enregistrerDonnees(formData: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  addPayment( payment:Payment):Observable<Payment>
  {
    return this.http.post<Payment>(this.apiUrl+'payement-method/create',payment) as Observable <Payment>
  }
  getAllPayment() :Observable<any>{
    return this.http.get(this.apiUrl+'payement-method/payement-method-list') as Observable<[Payment[],number]>;
  }
  editPaymentById(ID: number, payment: Payment): Observable<Payment> {
    return this.http.patch<Payment>(this.apiUrl+ 'payement-method/' + JSON.stringify(ID), payment);
  }
  findPaymentById(ID: number):Observable<any>{
    return this.http.get<Payment>(this.apiUrl+ 'payement-method/' + JSON.stringify(ID))
  }
  deletePayment( payment:Payment):Observable<Payment>
  {
    return this.http.post<Payment>(this.apiUrl+'payement-method/delete-multiple',payment) as Observable <Payment>
  }


  //transaction
  getAllTransaction() :Observable<any>{
    return this.http.get(this.apiUrl+'transaction/transaction-list') as Observable<[Transaction[],number]>;
  }
  addTransaction( transaction:Transaction):Observable<Transaction>
  {
    return this.http.post<Transaction>(this.apiUrl+'transaction/create',transaction) as Observable <Transaction>
  }
 
 editTansactionById(ID: number, transaction: Transaction): Observable<Transaction> {
    return this.http.patch<Transaction>(this.apiUrl+ 'transaction/' + JSON.stringify(ID), transaction);
  }
  findTransactionById(ID: number):Observable<any>{
    return this.http.get<Transaction>(this.apiUrl+ 'transaction/' + JSON.stringify(ID))
  }
  deleteTransaction( transaction:Transaction):Observable<Transaction>
  {
    return this.http.post<Transaction>(this.apiUrl+'transaction/delete-multiple',transaction) as Observable <Transaction>
  }

  // cost
  addCost( cost:Cost):Observable<Cost>
  {
    return this.http.post<Cost>(this.apiUrl+'cost/create',cost) as Observable <Cost>
  }
  getAllCost() :Observable<any>{
    return this.http.get(this.apiUrl+'cost/cost-list') as Observable<[Cost[],number]>;
  }
  editCostById(ID: number, cost: Cost): Observable<Cost> {
    return this.http.patch<Cost>(this.apiUrl+ 'cost/' + JSON.stringify(ID), cost);
  }
  findCostById(ID: number):Observable<any>{
    return this.http.get<Cost>(this.apiUrl+ 'cost/' + JSON.stringify(ID))
  }
  deleteCost( transaction:Cost):Observable<Cost>
  {
    return this.http.post<Cost>(this.apiUrl+'cost/delete-multiple',transaction) as Observable <Cost>
  }
}
