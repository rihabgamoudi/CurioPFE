import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
    private apiUrl = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    // Accessoire
    getAllCommande() :Observable<any>{
      return this.http.get(this.apiUrl+'commande/commande-list') as Observable<[Commande[],number]>;
    }
    addCommande( commande:Commande):Observable<Commande>
    {
      return this.http.post<Commande>(this.apiUrl+'commande/create',commande) as Observable <Commande>
    }
    editCommandeById(ID: number, commande: Commande): Observable<Commande> {
      return this.http.patch<Commande>(this.apiUrl+ 'commande/' + JSON.stringify(ID), commande);
    }
    findCommandeById(ID: number):Observable<any>{
      return this.http.get<Commande>(this.apiUrl+ 'commande/' + JSON.stringify(ID))
    }
    deleteCommande( commande:Commande):Observable<Commande>
    {
      return this.http.post<Commande>(this.apiUrl+'commande/delete-multiple',commande) as Observable <Commande>
    }
  
  
}
