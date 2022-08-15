import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = 'https://dummyjson.com/products/';
  
  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    }),
  }

  constructor(private http:HttpClient) { }

  getProduct() {
    return this.http.get(this.url);
  }
}
