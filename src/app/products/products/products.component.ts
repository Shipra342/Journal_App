import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  mySearch: string = '';
  productDetails: any


  selected: any = "diaries";
  constructor(public router: Router, private cartService: CartService) {   }

  ngOnInit(): void {    
  }
  openTab(tabs: string)
  {
    let route = '/home/products/' + tabs;
    this.router.navigate([route]);
  }

  searchProduct()
  {

    if(this.mySearch === 'diaries' || this.mySearch === 'journal' || this.mySearch === 'diary')
    {
      let route = '/home/products/diaries';
      this.router.navigate([route]);
    }
    else if(this.mySearch === 'pen' || this.mySearch === 'pencils')
    {
      let route = '/home/products/penPencils';
      this.router.navigate([route]);
    }
  }

  
}
