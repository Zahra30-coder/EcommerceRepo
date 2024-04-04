import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart, order, product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class EcomService {

  public readonly url = 'http://localhost:3000';
  public prods = '/products'

  constructor(private http: HttpClient) {}

  add(blog: product): Observable<any> {
    return this.http.post(this.url + this.prods, blog); 
    // Adjust the endpoint
  }
 
  get(): Observable<any> {
    return this.http.get<product[]>(this.url + this.prods)
  }
  getById(Id:string): Observable<any> {
    return this.http.get(this.url + this.prods + "/" + Id)
  }

  update(Id:string, blog:product): Observable<any> {
    return this.http.put<product>(`http://localhost:3000/products/${blog.id}`, blog)
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=4');
  }

  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?_q=${query}`)
  }

  // // cart functions
  // getCartList(){}

  // removeToCart(){}

  // removeItemFromCart(){}

  // addToCart(){}

  // localAddToCart(){}

  localAddToCart(data: product) {
    // let cartData = [];
    // let localCart = localStorage.getItem('localCart');
    // if (!localCart) {
    //   localStorage.setItem('localCart', JSON.stringify([data]));
    //   this.cartData.emit([data]);
    // } else {
    //   cartData = JSON.parse(localCart);
    //   cartData.push(data);
    //   localStorage.setItem('localCart', JSON.stringify(cartData));
    //   this.cartData.emit(cartData);
    // }
  }

  removeItemFromCart(productId: number) {
    // let cartData = localStorage.getItem('localCart');
    // if (cartData) {
    //   let items: product[] = JSON.parse(cartData);
    //   items = items.filter((item: product) => productId !== item.id);
    //   localStorage.setItem('localCart', JSON.stringify(items));
    //   this.cartData.emit(items);
    // }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    // return this.http
    //   .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
    //     observe: 'response',
    //   })
    //   .subscribe((result) => {
    //     if (result && result.body) {
    //       this.cartData.emit(result.body);
    //     }
    //   });
  }
  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId);
  }
  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  orderNow(data: order) {
    return this.http.post('http://localhost:3000/orders', data);
  }
  orderList() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<order[]>('http://localhost:3000/orders?userId=' + userData.id);
  }

  deleteCartItems(cartId: number) {
    // return this.http.delete('http://localhost:3000/cart/' + cartId).subscribe((result) => {
    //   this.cartData.emit([]);
    // })
  }

  cancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/orders/'+orderId)

  }
}

