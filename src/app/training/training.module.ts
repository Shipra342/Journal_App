import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { RouterModule, Routes } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';



const routes: Routes = [
  // { path: '', redirectTo: '/training', pathMatch: 'full' },
  { path: '', component: TrainingComponent },
  { path: '**', component: TrainingComponent },

];

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    MatExpansionModule
  ],
  exports:[RouterModule]
})
export class TrainingModule { }
