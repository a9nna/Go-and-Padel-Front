import { createFeature, createReducer, on } from '@ngrx/store';
import { loginUser } from '../actions/user.actions';
import { type UserState } from '../../user.model';

const initialState: UserState = {
  token: '',
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
        isLogged: true,
      })
    )
  ),
});

export const { name, reducer } = usersFeature;
