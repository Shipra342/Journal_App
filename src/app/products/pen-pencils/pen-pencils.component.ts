import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-pen-pencils',
  templateUrl: './pen-pencils.component.html',
  styleUrls: ['./pen-pencils.component.scss']
})
export class PenPencilsComponent implements OnInit {

  penPencils = [{ key: 'p0', title: "Camlin Tri-Mech 3-in-1 Pen Pencil Kit",  url: "./../../../assets/p1.jpg", price: "150/-" , quantity: 0, wishList: 0},
  { key: 'p1', title: "Color Pen Pencils", url: "./../../../assets/p2.jpg", price: "180/-" , quantity: 0, wishList: 0},
  { key: 'p2', title: "Keeper's pen pencils case", url: "./../../../assets/p3.webp", price: "2500/-" , quantity: 0, wishList: 0},
  { key: 'p3', title: "Mechnical pencil Soft Grip", url: "./../../../assets/p4.webp", price: "500/-" , quantity: 0, wishList: 0},
  { key: 'p4', title: "Plantable pen pencils", url: "./../../../assets/p5.webp", price: "290/-", quantity: 0, wishList: 0},
  { key: 'p5', title: "BIC 4-Color 3+1 Ball Pen and Pencil", url: "./../../../assets/p6.jpg", price: "90/-" , quantity: 0, wishList: 0},
  { key: 'p6', title: "Kitty Pen Pencils", url: "./../../../assets/p7.webp", price: "85/-" , quantity: 0, wishList: 0},
  { key: 'p7', title: "Erasable & Cute Kawaii Pens - 3 Pack with 6 Refills", url: "./../../../assets/p8.jpg", price: "120/-" , quantity: 0, wishList: 0},
  ];
  key: string = 'products/penPencils';

  constructor(private cartService: CartService, public router : Router) { }

  ngOnInit(): void {
  }

  addToCartdsc(text)
  {
    this.cartService.addToCart(text);
  }
  addToWishist(text)
  {
    this.cartService.addToWishList(text);
  }

  openTab(item)
  {
    this.router.navigate(['/home/products/productDetails'], {state: {item: item}});
    
  }
}
