import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';
import { BoxComponent } from './box/box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DiaryNotesComponent } from './diary-notes/diary-notes.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      { path: 'DialogsList', component: DiaryNotesComponent},

      { path: 'training', loadChildren: () => import('../training/training.module').then(m => m.TrainingModule) },
      { path: 'offers', loadChildren: () => import('../offers/offers.module').then(m => m.OffersModule) },
      { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
      { path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule) },
      { path: 'wishlist', loadChildren: () => import('../wish-list/wish-list.module').then(m => m.WishListModule) },
      // { path: 'upload', loadChildren: () => import('../upload/upload.module').then(m => m.UploadModule) },
      // { path: 'dragAndDrop', loadChildren: () => import('../drag-and-drop/drag-and-drop.module').then(m => m.DragAndDropModule) },
    ]
  },

  { path: '**', component: HomeComponent },


];

@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent,
    BoxComponent,
    DiaryNotesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[RouterModule],
})
export class HomeModule { }
