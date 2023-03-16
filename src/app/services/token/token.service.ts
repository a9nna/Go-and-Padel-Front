import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../../store/users/actions/user.actions';
import { type User } from '../../user.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(@Inject(Store) private readonly userStore: Store) {}

  setSession(loginResult: User) {
    const { token } = loginResult;

    localStorage.setItem('token', token);

    this.userStore.dispatch(loginUser({ user: { token } }));
  }
}
