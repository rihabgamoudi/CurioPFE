import { Injectable } from '@angular/core';
import { User } from '../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // Accessoire
  addUser( user:User):Observable<User>
  {
    return this.http.post<User>(this.apiUrl+'user/create',user) as Observable <User>
  }
  editUserById(ID: number, user: User): Observable<User> {
    return this.http.patch<User>(this.apiUrl+ 'user/' + JSON.stringify(ID), user);
  }
  getAllUsers() :Observable<any>{
    return this.http.get(this.apiUrl+'user/users') as Observable<[User[],number]>;
  }
  
  
  findUserById(ID: number):Observable<any>{
    return this.http.get<User>(this.apiUrl+ 'user/' + JSON.stringify(ID))
  }
  deleteUser( units:User):Observable<User>
  {
    return this.http.post<User>(this.apiUrl+'user/delete-multiple',units) as Observable <User>
  }

 
}
