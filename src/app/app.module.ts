import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home-page.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SellerHomePageComponent } from './pages/seller-home-page/seller-home-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdatteProductComponent } from './updatte-product/updatte-product.component';
import { SellerComponent } from './seller/seller.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCatComponent } from './product-cat/product-cat.component';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SellerHomePageComponent,
    AddProductComponent,
    UpdatteProductComponent,
    SellerComponent,
    ProductsPageComponent,
    UserLoginComponent,
    ProductDetailsComponent,
    ProductCatComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgbCarouselModule,
    FontAwesomeModule,
    NgbDropdownModule,
    NgbCollapseModule

  ],
  providers: [NgbDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
