import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems= [];
  constructor(private cartService: CartService) { }

  
  ngOnInit(): void {

    this.cartItems = this.cartService.getCurrentAddedItems();
    this.cartService.getItems().subscribe(res =>{
      this.cartItems = res;

    })
  }

  deleteItem(key: any) {
    this.cartService.deleteItemFromCart(key); 
  }
  plusQuantity(key: any) {
    this.cartService.plusQuantity(key);
  }
  minusQuantity(key: any) {
    this.cartService.minusQuantity(key);
  }
  clearCart() {
    this.cartService.clearCart();
  }
}
