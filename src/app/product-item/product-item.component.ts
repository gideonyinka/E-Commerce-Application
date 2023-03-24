import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Products} from '../models/Products';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
@Input() books:Products;
@Input() headPhones:Products;
@Input() backPacks:Products;
@Input() glasses:Products;
@Input() cups:Products;
@Input() shirts:Products;
@Input() product: Products = {id: 0, name: '', price: 0, url: '', description: ''};
@Output() productAdded: EventEmitter<Products> = new EventEmitter;
@Output() productDescription:EventEmitter<Products> = new EventEmitter;


  quantity_one: number = 1;
  quantity_two: number = 2;
  quantity_three:number = 3;
  quantity_four:number = 4;
  quantity_five:number = 5;
  
constructor(private cartService: CartService){
  this.books = {id: 0, name: '', price: 0, url: '', description: ''}
  this.headPhones = {id: 0,name: '', price: 0, url: '', description: ''}
  this.backPacks = {id: 0,name: '', price: 0, url: '', description: ''}
  this.glasses = {id: 0,name: '', price: 0, url: '', description: ''}
  this.cups = {id: 0,name: '', price: 0, url: '', description: ''}
  this.shirts = {id: 0,name: '', price: 0, url: '', description: ''}
}

ngOnInit(): void {}

addtocart(product:Products):void{
  this.productAdded.emit(product)
}

addToCartAlert(product:Products){
  alert(`${product.name} is added to the cart`)
}

checkImage(product:Products):void{
  this.productDescription.emit(product)
}



}
