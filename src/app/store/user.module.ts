import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.name, fromUser.reducer),
  ],
})
export class UserModule {}
