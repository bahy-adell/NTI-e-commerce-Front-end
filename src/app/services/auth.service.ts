import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup, Login } from '../interfaces/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) { 
    if (localStorage.getItem('user') !== null) {
    this.saveCurrentUser()
  }}

 
  singUp(formData: Signup): Observable<any> {
    return this._HttpClient.post('http://localhost:3010/api/v1/auth/signup', formData)
  }
  currentUser = new BehaviorSubject(null);
 

  saveCurrentUser() {
    const token: any = localStorage.getItem('user');
    this.currentUser.next(jwtDecode(token));
  }
  checkToken() {
    const token: any = localStorage.getItem('user');
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp! < Date.now() / 1000) {
      this.logout()
      this._Router.navigate(['/login'])
    }
  }
  
  login(formData: Login): Observable<any> {
    return this._HttpClient.post('http://localhost:3010/api/v1/auth/login', formData)
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.next(null);
  }
 
}