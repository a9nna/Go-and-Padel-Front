import {createFeature, createReducer, on} from '@ngrx/store';
import {loginUser} from '../actions/user.actions';
import {type UserState} from '../user.model';

export interface InitialUserState {
	email: string;
	token: string;
	isLogged: boolean;
};

const initialState: InitialUserState = {
	email: '',
	token: '',
	isLogged: false,
};

export const usersFeature = createFeature({
	name: 'user',
	reducer: createReducer(
		initialState,
		on(
			loginUser,
			(state, {user}): UserState => ({...state, ...user, isLogged: true}),
		),
	),
});

export const {name, reducer} = usersFeature;
