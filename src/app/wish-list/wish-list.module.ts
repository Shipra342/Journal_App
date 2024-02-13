import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: WishListComponent },
  { path: '**', component: WishListComponent },

];

@NgModule({
  declarations: [
    WishListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[RouterModule]
})
export class WishListModule { }
