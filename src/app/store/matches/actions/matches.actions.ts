import { createAction, props } from '@ngrx/store';
import { type Match } from 'src/app/match.model';

export const loadMatches = createAction(
  '[Matches] Load Matches',
  props<{ matches: Match[] }>()
);

export const deleteMatch = createAction(
  '[Matches] Delete Match',
  props<{ idMatch: string }>()
);
