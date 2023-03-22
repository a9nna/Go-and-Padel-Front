import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginUserComponent } from './login-user.component';
import { LoginPageRoutingModule } from './login-page-routing.module';


@NgModule({
  declarations: [LoginUserComponent],
  imports: [CommonModule, LoginPageRoutingModule, ReactiveFormsModule],
})
export class LoginPageModule {}
