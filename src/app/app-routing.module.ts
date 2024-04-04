import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home-page.component';
import { SellerHomePageComponent } from './pages/seller-home-page/seller-home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { UpdatteProductComponent } from './updatte-product/updatte-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SellerComponent } from './seller/seller.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCatComponent } from './product-cat/product-cat.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent   
  },
  {
    path: 'sellerHomePage',
    component: SellerHomePageComponent    
  },
  
  {
    path:'seller-auth',
    component: SellerComponent
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path:'update-product/:id',
    component: UpdatteProductComponent
  },
  {
    path:'product-page/:productId',
    component: ProductsPageComponent
  },
  {
    path:'user-login',
    component: UserLoginComponent
  },
  {
    path:'prod-det',
    component: ProductDetailsComponent
  },
  {
    path:'prod-cat',
    component: ProductCatComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
