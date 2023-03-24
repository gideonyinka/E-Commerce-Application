import { Component, OnInit, Input} from '@angular/core';
import { Products } from '../models/Products';
import { BehaviorSubject } from 'rxjs';
import { ProductDescriptionService } from '../services/product-description.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  
  public productsDescript:Products[] = []

  constructor(private productDescriptionService:ProductDescriptionService){}

  ngOnInit(): void {
    this.productDescriptionService.getProducts().subscribe(res=>{
      this.productsDescript = res;
  })
}
  
}


