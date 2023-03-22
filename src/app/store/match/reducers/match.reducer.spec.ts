import { type Match } from "../../../match.model";
import { loadMatch } from "../actions/match.actions"
import { reducer } from "./match.reducer";

describe("Given the matchFeature", () => {
  describe("When it receives an initial state with a match and a loadMatches action with a match", () => {
    test("Then it should return the new state with the passed match", () => {
      const action = loadMatch;
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
      };

      const match = {
        creator: 'ana@ana.com',
        category: 'masculine',
        date: new Date('2023-03-07T13:00:00.000Z'),
        level: '4.0',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image:
          'https://res.cloudinary.com/dpgfwla0c/image/upload/v1679378008/tree-736885__340_nogwlu.webp',
        allowedPlayersNumber: 4,
        id: '64119548e31a7cbed9c85afa',
      };

      const newState = reducer(initialState, action({ match }))

      expect(newState).toStrictEqual(match)
    })
  })
})
