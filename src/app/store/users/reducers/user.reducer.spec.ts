import { loginUser } from '../actions/user.actions';
import { type User, type UserState } from '../../../user.model';
import { reducer } from './user.reducer';

describe('Given the feature reducer', () => {
  describe("When it receives an initial state and a loginUser action with Victor with email 'user@user.com' and token 'abcdefg'", () => {
    test('Then it should return the new state with Victor logged', () => {
      const action = loginUser;
      const initialState: UserState = {
        token: '',
        email: "",
        isLogged: false,
      };

      const user: User = {
        token: 'nsia721noiasmña',
        email: "user@user.com"
      };
      const expectedNewState: UserState = {
        token: 'nsia721noiasmña',
        email: "user@user.com",
        isLogged: true,
      };

      const result = reducer(initialState, action({ user }));

      expect(result).toStrictEqual(expectedNewState);
    });
  });
});
