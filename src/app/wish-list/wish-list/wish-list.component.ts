import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishListItems= [];
  key: string;
  previousUrl: string;
  constructor(private cartService: CartService, public router: Router) {}

  ngOnInit(): void {
    this.wishListItems = this.cartService.getCurrentAddedItemsWishlist();
  }

  deleteItem(key: any)
  {
    this.cartService.deleteItemFromWishlist(key);
  }

  addToCart(item)
  {
    this.cartService.addToCart(item);
  }
  openTab(item)
  {
    this.router.navigate(['/home/products/productDetails'], {state: {item: item}});
  }
}
