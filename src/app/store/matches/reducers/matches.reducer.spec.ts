import { type Match } from 'src/app/match.model';
import { loadMatches } from '../actions/matches.actions';
import { reducer } from './matches.reducer';

describe('Given the matchesFeature', () => {
  describe('When it receives an initial state and a loadMatches action with a list of 2 matches', () => {
    test('Then it should return the new state with the list of 2 matches', () => {
      const action = loadMatches;
      const initialState: Match[] = [];
      const firstMatch: Match = {
        category: '',
        date: new Date('1995-12-17T03:24:00'),
        level: '',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image: '',
        allowedPlayersNumber: 4,
      };
      const secondMatch: Match = {
        category: '',
        date: new Date('1995-12-17T03:37:00'),
        level: '',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image: '',
        allowedPlayersNumber: 4,
      };

      const matches: Match[] = [firstMatch, secondMatch];

      const receivedMatches = reducer(initialState, action({ matches }));

      expect(receivedMatches).toStrictEqual(matches);
    });
  });
});
