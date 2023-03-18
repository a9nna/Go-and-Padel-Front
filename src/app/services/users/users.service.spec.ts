import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UiService } from '../ui/ui.service';
import { Store } from '@ngrx/store';
import { UsersService } from './users.service';
import mockStore from '../../../mocks/mockStore/mockStore';
import { type UserCredentials } from 'src/app/user.model';

describe('Given a User Service', () => {
  let usersService: UsersService;
  let httpMockController: HttpTestingController;
  let uiService: UiService;
  const store = mockStore();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UsersService,
        UiService,
        { provide: Store, useValue: store },
      ],
    });

    usersService = TestBed.inject(UsersService);
    httpMockController = TestBed.inject(HttpTestingController);
    uiService = TestBed.inject(UiService);
  });

  afterEach(() => {
    httpMockController.verify();
  });

  describe("When its login method is invoked with a user with 'ana@ana.com' email and 'holaholahola' password", () => {
    test('Then dispatch should be invoked', () => {
      const user: UserCredentials = {
        email: 'ana@ana.com',
        password: 'holaholahola',
      };

      usersService.loginUser(user)

      expect(store.dispatch).toHaveBeenCalled();
    });
  });
});
