import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { Routes, RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';


const routes: Routes = [
{
  path: '', component: DragAndDropComponent,
  children: [
    {path: '', redirectTo:'dragAndDrop'},
    { path: 'dragAndDrop', component: DragAndDropComponent},
  ]
},

{ path: '**', component: DragAndDropComponent },
]

@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule
  ],
  exports:[RouterModule],
})
export class DragAndDropModule { }
