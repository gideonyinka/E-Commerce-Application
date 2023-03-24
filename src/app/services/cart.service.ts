import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../models/Products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public products = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.products.asObservable()
  }
  
  setProducts(product:Products[]){
    this.cartItemList.push(...product)
    this.products.next(product);
  }


  addtoCart(product:Products){
    
    this.cartItemList.push(product);
    this.products.next(this.cartItemList)


  }
      
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }


  removeCardItem(product:Products){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index, 1)
      }
    })
    this.products.next(this.cartItemList);
  }


    removeAllCart(){
      this.cartItemList = []
      this.products.next(this.cartItemList);
    }

  }





