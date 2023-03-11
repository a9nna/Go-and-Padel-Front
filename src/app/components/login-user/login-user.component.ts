import { Component, Inject } from '@angular/core';
import { type FormBuilder } from '@angular/forms';
import { InjectionToken } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { type UserCredentials } from 'src/app/user.model';
import { type Store } from '@ngrx/store';
import { loginUser } from 'src/app/store/users/actions/user.actions';

export const formBuilderToken = new InjectionToken<FormBuilder>('FormBuilder');
export const usersStoreToken = new InjectionToken<Store>('Store');

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent {
  loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    @Inject(formBuilderToken) private readonly formBuilder: FormBuilder,
    @Inject(UsersService) private readonly usersService: UsersService,
    @Inject(usersStoreToken) private readonly usersStore: Store
  ) {}

  onSubmit() {
    const userCredential = this.loginForm.value as UserCredentials;

    this.usersService.loginUser(userCredential).subscribe((userData) => {
      const { token } = userData;

      localStorage.setItem('token', token);

      this.usersStore.dispatch(loginUser({user: {token}}))
    });
  }
}
