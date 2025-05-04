import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://fakestoreapi.com';
  constructor(private _http: HttpClient) { }

  getProductById(key: number): Observable<Product> {
    return this._http.get<Product>(`${this.apiUrl}/products/${key}`);
  }
}
