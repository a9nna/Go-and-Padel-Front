import { HttpHeaders, type HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { type Observable } from 'rxjs';
import { type UserCredentials } from '../../user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  apiUrl = `${environment.apiUrl}${environment.path.users}${environment.path.loginUser}`;

  constructor(@Inject(String) private readonly http: HttpClient) {}

  loginUser(user: UserCredentials): Observable<UserCredentials> {
    return this.http.post<UserCredentials>(this.apiUrl, user, this.httpOptions);
  }
}

// Const response = { token: 'abcd1234' };
// (httpMock.post as jest.Mock).mockReturnValueOnce(response);
