import { type Match } from 'src/app/match.model';
import { deleteMatch, loadMatches } from '../actions/matches.actions';
import { reducer } from './matches.reducer';

describe('Given the matchesFeature', () => {
  describe('When it receives an initial state and a loadMatches action with a list of 2 matches', () => {
    test('Then it should return the new state with the list of 2 matches', () => {
      const action = loadMatches;
      const initialState: Match[] = [];
      const firstMatch: Match = {
        id: "",
        category: '',
        date: new Date('1995-12-17T03:24:00'),
        level: '',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image: '',
        allowedPlayersNumber: 4,
      };
      const secondMatch: Match = {
        id: "",
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

  describe("When it receives an initial state with a list of two matches and a deleteMatch action with one of those matches", () => {
    test("Then it should return the new state with the current list without de selected match", () => {
      const action = deleteMatch;
      const firstMatch: Match = {
        id: "1",
        category: '',
        date: new Date('1995-12-17T03:24:00'),
        level: '',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image: '',
        allowedPlayersNumber: 4,
      };
      const secondMatch: Match = {
        id: "2",
        category: '',
        date: new Date('1995-12-17T03:37:00'),
        level: '',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image: '',
        allowedPlayersNumber: 4,
      };

      const initialState: Match[] = [
        firstMatch,
        secondMatch
      ];
      const expectedNewState: Match[] = [
        secondMatch
      ]

      const newState = reducer(initialState, action({ match: firstMatch }))

      expect(newState).toStrictEqual(expectedNewState)
    })
  })
});
