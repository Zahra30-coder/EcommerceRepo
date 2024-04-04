
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart,product } from '../datatype';
import { EcomService } from '../service/ecom.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  product: any;

  
  constructor(private activeRoute:ActivatedRoute, private service:EcomService) { }

  // ngOnInit(): void {
  //   let productId= this.activeRoute.snapshot.paramMap.get('productId');
  //   console.warn(productId);

  //   productId && this.service.getById(productId).subscribe((result)=>{
  //     this.productData= result;
  //     let cartData= localStorage.getItem('localCart');
  //     if(productId && cartData){
  //       let items = JSON.parse(cartData);
  //       items = items.filter((item:product)=>productId=== item.id.toString());
  //       if(items.length){
  //         this.removeCart=true
  //       }else{
  //         this.removeCart=false
  //       }
  //     }

//       let user = localStorage.getItem('user');
//       if(user){
//         let userId= user && JSON.parse(user).id;
//         this.service.getCartList(userId);

//         this.service.cartData.subscribe((result)=>{
//           let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
//        if(item.length){
//         this.cartData=item[0];
//         this.removeCart=true;
//        }
//         })
//       }     
//     })
    
//   }
//   handleQuantity(val:string){
//     if(this.productQuantity<20 && val==='plus'){
//       this.productQuantity+=1;
//     }else if(this.productQuantity>1 && val==='min'){
//       this.productQuantity-=1;
//     }
//   }

//   addToCart(){
//     if(this.productData){
//       this.productData.quantity = this.productQuantity;
//       if(!localStorage.getItem('user')){
//         this.service.localAddToCart(this.productData);
//         this.removeCart=true
//       }else{
//         let user = localStorage.getItem('user');
//         let userId= user && JSON.parse(user).id;
//         let cartData:cart={
//           ...this.productData,
//           productId:this.productData.id,
//           userId
//         }
//         delete cartData.id;
//         this.service.addToCart(cartData).subscribe((result)=>{
//           if(result){
//            this.service.getCartList(userId);
//            this.removeCart=true
//           }
//         })        
//       }
      
//     } 
//   }
//   removeToCart(productId:number){
//     if(!localStorage.getItem('user')){
// this.service.removeItemFromCart(productId)
//     }else{
//       console.warn("cartData", this.cartData);
      
//       this.cartData && this.service.removeToCart(this.cartData.id)
//       .subscribe((result)=>{
//         let user = localStorage.getItem('user');
//         let userId= user && JSON.parse(user).id;
//         this.service.getCartList(userId)
//       })
//     }
//     this.removeCart=false
//   }


}
