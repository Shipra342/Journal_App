import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[RouterModule]
})
export class LoginModule { }
