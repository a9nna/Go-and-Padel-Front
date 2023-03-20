import { createFeature, createReducer, on } from '@ngrx/store';
import { loginUser } from '../actions/user.actions';
import { type UserState } from '../../../user.model';

export const initialState: UserState = {
  token: '',
  email: '',
  isLogged: false,
};

export const usersFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(
      loginUser,
      (state, { user }): UserState => ({
        ...state,
        token: user.token,
        email: user.email,
        isLogged: true,
      })
    )
  ),
});

export const { name, reducer, selectIsLogged, selectToken, selectUserState, selectEmail } =
  usersFeature;
