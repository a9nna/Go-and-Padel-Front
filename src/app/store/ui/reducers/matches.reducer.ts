import { createFeature, createReducer, on } from '@ngrx/store';
import { type Match } from 'src/app/match.model';
import { loadMatches } from '../actions/matches.actions';

const initialState: Match[] = [];

export const matchesFeature = createFeature({
  name: 'matches',
  reducer: createReducer(
    initialState,
    on(loadMatches, (state, { matches }): Match[] => matches)
  ),
});

export const { name, reducer, selectMatchesState } = matchesFeature;
