import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { selectIsLogged } from '../../store/users/reducers/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged$: Observable<boolean> = this.store.select(selectIsLogged);

  constructor(
    @Inject(Store) private readonly store: Store,

  ) {}

  checkToken() {
    if (localStorage.getItem("token")) {
      return true;
    }

    return false;
  }
}
