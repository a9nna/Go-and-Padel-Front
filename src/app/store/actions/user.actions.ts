import { createAction, props } from '@ngrx/store';
import { type User } from '../user.model';

export const loginUser = createAction(
  '[User] Log in User',
  props<{ user: User }>()
);
