import { Component } from '@angular/core';
import { type UserCredentials } from 'src/app/user.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  title = "hola"
  user: UserCredentials = {
    email: "",
    password: ""
  }
}
