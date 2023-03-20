import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../../store/users/actions/user.actions';
import { type User } from '../../user.model';
import { UiService } from '../ui/ui.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    @Inject(Store) private readonly userStore: Store,
    @Inject(UiService) private readonly uiService: UiService
    ) {}

  setSession(loginResult: User) {
    const { token, email } = loginResult;

    localStorage.setItem('token', token);

    this.userStore.dispatch(loginUser({ user: { token, email } }));

    return loginResult
  }

  failedSession() {
    this.uiService.hideLoader();
  }
}
