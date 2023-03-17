import { state } from '@angular/animations';
import { createFeature, createReducer, on } from '@ngrx/store';
import { type Match } from 'src/app/match.model';
import { deleteMatch, loadMatches } from '../actions/matches.actions';

const initialState: Match[] = [{
  id: "",
  category: "",
  date: new Date(),
  level: "",
  paddleCourt: 1,
  signedPlayersNumber: 0,
  image: "",
  allowedPlayersNumber: 0
}];

export const matchesFeature = createFeature({
  name: 'matches',
  reducer: createReducer(
    initialState,
    on(loadMatches, (state, { matches }): Match[] => matches),
    on(deleteMatch, (state, { match }): Match[] => (state.filter(
      (stateMatch) => stateMatch.id !== match.id
    )))
  ),
});

export const { name, reducer, selectMatchesState } = matchesFeature;
