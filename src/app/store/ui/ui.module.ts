import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { uiFeature } from './reducers/ui.reducers';



@NgModule({
  imports: [CommonModule, StoreModule.forFeature(uiFeature)],
})
export class UiModule {}
