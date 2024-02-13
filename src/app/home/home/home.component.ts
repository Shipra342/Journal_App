import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  currentTab: any = 'DialogsList';
  cartItems = [];
  wishlistItems = [];
  sum: number = 0;
  @Input() text: any
  constructor(public dialog: MatDialog, private router: Router, private cartService: CartService) { }


  ngOnInit() {

    this.cartService.getItems().subscribe((cartItems) => {

      this.sum = 0;
      this.cartItems = cartItems;
      if(this.cartItems.length)
      {
        
        for (let element of this.cartItems) {
          this.sum += element.quantity;
        }

      }
    }
    );

    this.wishlistItems = this.cartService.getCurrentAddedItemsWishlist();
  }


  onTab(tabs: string) {
    let route = '/home/' + tabs;
    debugger
    this.router.navigate([route]);
  }

  openDialog() {

    this.dialog.open(DialogComponent, { disableClose: true }).afterClosed().subscribe(result => {
      if (result != undefined)
        // this.textList.push(result);
        debugger

    });
  }


}

