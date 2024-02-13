import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DiaryStorageComponent } from './diary-storage/diary-storage.component';
import { PenPencilsComponent } from './pen-pencils/pen-pencils.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      {path: '', redirectTo:'diaries'},
      { path: 'diaries', component: DiaryStorageComponent},
      { path: 'penPencils', component: PenPencilsComponent},
      { path: 'productDetails', component: ProductDetailComponent},
    ]
  },

  { path: '**', component: ProductsComponent },
]

@NgModule({
  declarations: [
    ProductsComponent,
    DiaryStorageComponent,
    PenPencilsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  exports:[RouterModule],
})
export class ProductsModule { }
