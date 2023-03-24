import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
const routes: Routes = [{path:"", component:ProductListComponent },
                    {path:"app-cart", component:CartComponent},
                  {path:"product-item", component:ProductItemComponent},
                {path:"app-create-post", component:CreatePostComponent},
                {path:'app-product-description', component:ProductDescriptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
