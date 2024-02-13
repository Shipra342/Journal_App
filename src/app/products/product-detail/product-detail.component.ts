import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetails: any;
  key: string;

  constructor(private cartService: CartService, private router: Router, private location: Location) {
    this.productDetails = this.router.getCurrentNavigation().extras?.state['item'];

  }

  ngOnInit() {}

  goBack() {
    
    this.location.back();
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }
}

