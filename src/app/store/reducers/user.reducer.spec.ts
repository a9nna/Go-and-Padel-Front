import { loginUser } from '../actions/user.actions';
import { type User } from '../user.model';
import { type InitialUserState, reducer } from './user.reducer';

describe('Given the feature reducer', () => {
  describe("When it receives an initial state and a loginUser action with Victor with email 'user@user.com' and token 'abcdefg'", () => {
    test('Then it should return the new state with Victor logged', () => {
      const action = loginUser;
      const initialState: InitialUserState = {
        email: '',
        token: '',
        isLogged: false,
      };

      const user: User = {
        email: 'user@user.com',
        token: 'abcdefg',
      };
      const expectedNewState: InitialUserState = {
        email: 'user@user.com',
        token: 'abcdefg',
        isLogged: true,
      };

      const result = reducer(initialState, action({ user }));

      expect(result).toStrictEqual(expectedNewState);
    });
  });
});
