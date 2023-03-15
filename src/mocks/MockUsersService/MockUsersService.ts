import { Injectable } from '@angular/core';
import { of, type Observable } from 'rxjs';
import { type User, type UserCredentials } from 'src/app/user.model';
import mockUser from '../mockUser/mockUser';

@Injectable({
  providedIn: 'root',
})
export class MockUsersService {
  loginUser(user: UserCredentials): Observable<User> {
    const mockUserValue = of(mockUser);

    return mockUserValue;
  }
}
