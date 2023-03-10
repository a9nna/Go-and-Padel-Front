import { HttpHeaders, type HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { type Observable } from 'rxjs';
import { type UserCredentials } from '../../user.model';
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

  api = `${apiUrl}${users}${loginUser}`;

  constructor(@Inject(String) private readonly http: HttpClient) {}

  loginUser(user: UserCredentials): Observable<UserCredentials> {
    return this.http.post<UserCredentials>(this.api, user, this.httpOptions);
  }
}
