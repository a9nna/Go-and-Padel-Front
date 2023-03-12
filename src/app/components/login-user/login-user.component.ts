import { Component, Inject, InjectionToken } from '@angular/core';
import { type FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UsersService } from '../../services/users/users.service';
import { type UserCredentials } from '../../../app/user.model';
import { loginUser } from '../../store/users/actions/user.actions';

export const formBuilderToken = new InjectionToken<FormBuilder>('FormBuilder', {
  providedIn: 'root',
  factory: () => new FormBuilder(),
});
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  loginFailed = false;

  constructor(
    @Inject(formBuilderToken) private readonly formBuilder: FormBuilder,
    @Inject(UsersService) private readonly usersService: UsersService,
    @Inject(Store) private readonly usersStore: Store
  ) {}

  onSubmit() {
    const userCredential = this.loginForm.value as UserCredentials;

    this.usersService.loginUser(userCredential).subscribe((userData) => {
      const { token } = userData;

      localStorage.setItem('token', token);

      this.usersStore.dispatch(loginUser({ user: { token } }));
    }, () => {
      this.loginFailed = true;
    }
    );
  }
}
