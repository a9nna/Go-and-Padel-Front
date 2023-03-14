import { Component, Inject } from '@angular/core';
import { type FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { type UserCredentials } from '../../../app/user.model';
import { TokenService } from '../../services/token/token.service';
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
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(UsersService) private readonly usersService: UsersService,
    @Inject(TokenService) private readonly tokenService: TokenService,
    @Inject(Router) private readonly router: Router
  ) {}

  onSubmit() {
    const userCredential = this.loginForm.value as UserCredentials;

    this.usersService.loginUser(userCredential).subscribe({next: (userData) => {
      this.tokenService.setSession(userData);

      (async () => this.router.navigate(['']))();
      },error: () => {
      this.loginFailed = true}
    })
  }
}
