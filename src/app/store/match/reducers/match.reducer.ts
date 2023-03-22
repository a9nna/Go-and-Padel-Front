import { createFeature, createReducer, on } from '@ngrx/store';
import { type Match } from 'src/app/match.model';
import { loadMatch } from '../actions/match.actions';

const initialState: Match = {
    creator: '',
    id: '',
    category: '',
    date: new Date(),
    level: '',
    paddleCourt: 1,
    signedPlayersNumber: 0,
    image: '',
    allowedPlayersNumber: 0,
  }

export const matchFeature = createFeature({
  name: 'match',
  reducer: createReducer(
    initialState,
    on(loadMatch, (state, { match }): Match => ({
      ...state,
      ...match
    }))
  ),
});

export const {name, reducer, selectAllowedPlayersNumber, selectCategory,
  selectCreator, selectDate, selectId, selectImage,selectLevel, selectMatchState,
  selectPaddleCourt, selectSignedPlayersNumber} = matchFeature;
