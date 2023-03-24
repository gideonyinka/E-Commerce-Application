import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  public productItemList: any = []
  public product = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.product.asObservable()
  }

  addProduct(product:Products){
    this.productItemList.push(product)
    this.product.next(this.productItemList);
    this.productItemList = []
    
  }
}
