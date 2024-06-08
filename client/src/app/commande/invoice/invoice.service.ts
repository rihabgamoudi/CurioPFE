import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // Accessoire
  getAllInvoice() :Observable<any>{
    return this.http.get(this.apiUrl+'invoice/invoice-list') as Observable<[Invoice[],number]>;
  }
  addInvoice( invoice:Invoice):Observable<Invoice>
  {
    return this.http.post<Invoice>(this.apiUrl+'invoice/create',invoice) as Observable <Invoice>
  }
  editInvoiceById(ID: number, invoice: Invoice): Observable<Invoice> {
    return this.http.patch<Invoice>(this.apiUrl+ 'invoice/' + JSON.stringify(ID), invoice);
  }
  findInvoiceById(ID: number):Observable<any>{
    return this.http.get<Invoice>(this.apiUrl+ 'invoice/' + JSON.stringify(ID))
  }
  deleteInvoice( invoice:Invoice):Observable<Invoice>
  {
    return this.http.post<Invoice>(this.apiUrl+'invoice/delete-multiple',invoice) as Observable <Invoice>
  }

}
