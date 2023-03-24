import { Component, OnInit } from '@angular/core';
import { Products } from '../models/Products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public addingProduct:any[] = [];
public grandTotal !:number;

constructor(private cartService:CartService){}

ngOnInit(): void {
  this.cartService.getProducts().subscribe(res=>{
    this.addingProduct = res;
    this.grandTotal = this.cartService.getTotalPrice()
  })
}
deleteItem(item:any){
  this.cartService.removeCardItem(item);
}

deleteAllItem(){
  this.cartService.removeAllCart();
}

deleteAlert(item:any){
  alert(`${item.name} is removed from the cart`)
}
}
