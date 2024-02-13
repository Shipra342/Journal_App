
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-diary-storage',
  templateUrl: './diary-storage.component.html',
  styleUrls: ['./diary-storage.component.scss'],
})
export class DiaryStorageComponent implements OnInit {

  @Input() search: any;
  price: any;

  constructor(private cartService: CartService, public router: Router) {

    // router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     this.previousUrl = event.url;
    //     debugger
    //   });
   }

  diaries = [{ key: 'd0', title: "Spiral Diary", url: "./../../../assets/d2.jpg", price: "150/-", quantity: 0, wishList: 0},
  { key: 'd1', title: "Simple Diary", url: "./../../../assets/d1.jpg", price: "180/-", quantity: 0, wishList: 0 },
  { key: 'd2', title: "Mini Diary", url: "./../../../assets/d3.jpg", price: "2500/-", quantity: 0, wishList: 0},
  { key: 'd3', title: "Black Journal", url: "./../../../assets/d4.webp", price: "500/-", quantity: 0, wishList: 0 },
  { key: 'd4', title: "Quote's Diary", url: "./../../../assets/d5.jpg", price: "290/-", quantity: 0, wishList: 0 },
  { key: 'd5', title: "Notebook Diary", url: "./../../../assets/d6.jpeg", price: "90/-", quantity: 0, wishList: 0 },
  { key: 'd6', title: "Simple Diary", url: "./../../../assets/d7.jpg", price: "85/-", quantity: 0, wishList: 0 },
  { key: 'd7', title: "Girls Diary", url: "./../../../assets/d8.webp", price: "120/-", quantity: 0, wishList: 0 },
  ];


  ngOnInit(): void {

  }

  addToCartdsc(item) {
    this.cartService.addToCart(item);
    debugger
    
  }
  addToWishist(item)
  {
    this.cartService.addToWishList(item);
  }

  openTab(item)
  {
    this.router.navigate(['/home/products/productDetails'], {state: {item: item}});

  }

}
