import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  // { path: '', redirectTo: '/training', pathMatch: 'full' },
  { path: '', component: CartComponent },
  { path: '**', component: CartComponent },

];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    MatButtonModule
  ],
  exports:[RouterModule]
})
export class CartModule { }
