import { type HttpClient, type HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { type UserCredentials } from '../../user.model';
import { UsersService } from './users.service';
import {type Environment} from "../../../types"

describe('Given a UsersService class', () => {
  let usersService: UsersService;
  let httpMock: Partial<HttpClient>;
  const {
    apiUrl,
    path: { users, loginUser },
  } = environment as unknown as Environment;

  beforeEach(() => {
    jest.resetModules();
    httpMock = {
      post: jest.fn(),
    };
    usersService = new UsersService(httpMock as HttpClient);
  });

  describe('When we use it to create a new object called sevice', () => {
    test('Then service must have loginUser method', () => {
      expect(typeof usersService.loginUser).toBe('function');
    });

    test('Then it should call its loginUser method with the apiUrl, a user and an object with header property', () => {
      const user: UserCredentials = {
        email: 'user@user.com',
        password: 'holaholahola',
      };
      const api = `${apiUrl}${users}${loginUser}`;

      usersService.loginUser(user);

      expect(httpMock.post).toHaveBeenCalledWith(
        api,
        user,
        expect.objectContaining({ headers: expect.any(Object) as HttpHeaders })
      );
    });
  });
});
