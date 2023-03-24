import { Component, OnInit  } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
firstName:string ="";
lastName:string ="";
password:string = "";
email:string = "";
form:any[]=[]

constructor(private cartService:CartService){}
public addingProduct:any[] = [];

ngOnInit(): void {
  this.cartService.getProducts().subscribe(res=>{
  this.addingProduct = res;
})
  
}

submitForm():void{

  this.firstName="";
  this.lastName = "";
  this.email = "";
  this.password ="";
}

deleteAllItem(){
  this.cartService.removeAllCart();
}

firstNameChange(firstname:string){
  this.firstName = firstname
}

lastNameChange(lastname:string){
  this.lastName = lastname
}

emailChange(email:string){
  this.email = email
}


passwordChange(password:string){
  this.password = password
}
}
