import { Component , OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { faStore } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{
  faStore=faStore;
  public totalItem:number = 0;
  constructor(private cartService:CartService){}
  
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
