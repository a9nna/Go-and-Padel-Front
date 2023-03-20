
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import decodeToken from "jwt-decode";
import { type Observable } from 'rxjs';
import { selectIsLoading } from './store/ui/reducers/ui.reducers';
import { loginUser } from './store/users/actions/user.actions';
import { type User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/styles.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);

  constructor(
    @Inject(Store) private readonly store: Store,
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token')!;

    if(token) {
      const { email }: User = decodeToken(token);

      this.store.dispatch(loginUser({ user: { token , email } }));
    }
  }
}
