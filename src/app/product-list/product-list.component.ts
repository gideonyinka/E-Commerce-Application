import { Component, OnInit} from '@angular/core';
import {Products} from '../models/Products';
import { CartService } from '../services/cart.service';
import { ProductDescriptionService } from '../services/product-description.service';
import {ProductsService} from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  books:Products;
  headPhones:Products;
  backPack:Products;
  glasses:Products;
  cups:Products;
  shirts:Products;
  public products: Products[] = [];
  // Cart:Products;
  
 
  constructor(private productService:ProductsService, private cartService:CartService, private productDescriptionService:ProductDescriptionService){
    this.books = {id: 0, name: '', price: 0, url: '', description: ''}
    this.headPhones = {id: 0,name: '', price: 0, url: '', description: ''}
    this.backPack = {id: 0,name: '', price: 0, url: '', description: ''}
    this.glasses = {id: 0,name: '', price: 0, url: '', description: ''}
    this.cups = {id: 0,name: '', price: 0, url: '', description: ''}
    this.shirts = {id: 0,name: '', price: 0, url: '', description: ''}
  }
  
    ngOnInit(): void {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        this.products.forEach((a:any)=>{
          Object.assign(a, {quantity:1, total:a.price})
        })
      })
      this.books = this.products[0]
      this.headPhones = this.products[1]
      this.backPack= this.products[2]
      this.glasses= this.products[3]
      this.cups= this.products[4]
      this.shirts= this.products[5]
    }

    addtocart(product:Products){
      this.cartService.addtoCart(product);
    }
    
    
    public getImage(product:Products){
      this.productDescriptionService.addProduct(product);
    }
}
