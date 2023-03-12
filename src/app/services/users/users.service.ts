import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { type Observable } from 'rxjs';
import { type User, type UserCredentials } from '../../user.model';
import { environment } from '../../../environments/environment';
import { type Environment } from 'src/types';

const {
  apiUrl,
  path: { users, loginUser },
} = environment as Environment;
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private readonly api = `${apiUrl}${users}${loginUser}`;

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  loginUser(user: UserCredentials): Observable<User> {
    return this.http.post<User>(this.api, user, this.httpOptions);
  }
}
