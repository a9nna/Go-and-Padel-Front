import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { matchFeature } from './reducers/match.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(matchFeature)],
})
export class MatchModule {}
