import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]>{
    return this.httpClient.get<[]>('./../../assets/data.json');
  }
}
