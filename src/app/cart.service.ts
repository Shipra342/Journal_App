import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new Subject<any>();
  items = [];
  wishListItems = [];
  productdetail: any;
  key: string;
  countPrice: number;
  countQuantity: number;


  constructor() { }

  getCurrentAddedItems()
  {
    return this.items;
  }

  getCurrentAddedItemsWishlist()
  {
    return this.wishListItems;
  }

  addToCart(product?: any) {
    this.items.push(product);
    product.quantity++;
    this.cartSubject.next(this.items);
  }

  addToWishList(product?: any)
  {
    this.wishListItems.push(product);
    product.wishList++;
  }

  getItems() {
    return this.cartSubject;
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
  }

  deleteItemFromCart(key: any) {
    this.items.splice(this.items.findIndex(x => x.key === key) , 1)
    this.cartSubject.next(this.items);
  }

  deleteItemFromWishlist(key: any)
  {
    this.wishListItems.splice(this.wishListItems.findIndex(x => x.key === key) , 1);
    
  }
  
  plusQuantity(key: any) {
    this.items.find(x => x.key === key).quantity++;
    this.countPrice = parseInt(this.items.find(x => x.key === key).price);
    this.countQuantity = parseInt(this.items.find(x => x.key === key).quantity);
    this.items.find(x => x.key === key).price = (this.countPrice * this.countQuantity) / ((this.countQuantity) - 1) + "/-";
    this.cartSubject.next(this.items);

  }
  minusQuantity(key: any) {
    if (this.items.find(x => x.key === key).quantity === 1 || this.items.find(x => x.key === key).quantity === '1') {
      this.deleteItemFromCart(key);
    }
    else {
      this.countPrice = parseInt(this.items.find(x => x.key === key).price);
      this.countQuantity = parseInt(this.items.find(x => x.key === key).quantity);
      this.items.find(x => x.key === key).price = this.countPrice - (this.countPrice / this.countQuantity) + "/-";
      this.items.find(x => x.key === key).quantity--;
      this.cartSubject.next(this.items);
    }

  }

  productDetail(item: any, key: string)
  {
    this.productdetail = item;
    this.key = key;
  }
 
  getProductDetails()
  {
    return this.productdetail;
  }
  getProductKey()
  {
    return this.key;
  }
}
