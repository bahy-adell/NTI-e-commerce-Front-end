import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }

  private hostName: string = 'http://localhost:3010'
  private routeName: string = '/api/v1/products'
  imgDomain: string = `${this.hostName}/uploads/`
  

  getProducts(): Observable<any> {
    return this._httpClient.get(`http://localhost:3010/api/v1/products`)
  }

  getOneProduct(id: string): Observable<any> {
    return this._httpClient.get(`${this.hostName}${this.routeName}/${id}`)
  }
}
