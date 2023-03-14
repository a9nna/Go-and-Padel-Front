import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { loginUser } from '../../store/users/actions/user.actions';
import mockUser from '../../../mocks/mockUser/mockUser';
import mockStore from '../../../mocks/mockStore/mockStore';
import { TokenService } from './token.service';

describe('Given a TokenService', () => {
  let service: TokenService;
  const store = mockStore();
  beforeEach(() => {
    window.localStorage.clear();
    TestBed.configureTestingModule({
      providers:[{ provide: Store, useValue: store }]
    });
    service = TestBed.inject(TokenService);
  });

  describe('When you call its setSession method', () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.setSession).toBe("function");
    })

    test("Then must call dispatch with loginUser Action", () => {
      service.setSession(mockUser)

      expect(store.dispatch).toHaveBeenCalledWith(loginUser({user: mockUser}));
    })
  });
});
