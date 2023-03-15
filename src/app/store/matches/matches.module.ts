import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { matchesFeature } from './reducers/matches.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(matchesFeature)],
})
export class MatchesModule {}
