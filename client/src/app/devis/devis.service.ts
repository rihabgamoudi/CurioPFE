import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from './devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private apiUrl = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    
    getAllDevis() :Observable<any>{
      return this.http.get(this.apiUrl+'device/device-list') as Observable<[Devis[],number]>;
    }
    addDevis( devis:Devis):Observable<Devis>
    {
      return this.http.post<Devis>(this.apiUrl+'device/create',devis) as Observable <Devis>
    }
    editDevisById(ID: number, devis: Devis): Observable<Devis> {
      return this.http.patch<Devis>(this.apiUrl+ 'device/' + JSON.stringify(ID), devis);
    }
    findDevisById(ID: number):Observable<any>{
      return this.http.get<Devis>(this.apiUrl+ 'device/' + JSON.stringify(ID))
    }
    deleteDevis( devis:Devis):Observable<Devis>
    {
      return this.http.post<Devis>(this.apiUrl+'device/delete-multiple',devis) as Observable <Devis>
    }
  
  
}
