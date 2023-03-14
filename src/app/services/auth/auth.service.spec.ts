import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { type Store as localStorageStore} from "../../../types"
import mockStore from '../../../mocks/mockStore/mockStore';
import { AuthService } from './auth.service';
import { localStorageMock } from '../../../mocks/mockLocalStorege/mockLocalStorage';

describe('Given an AuthService', () => {
  let service: AuthService;
  const store = mockStore();

  beforeEach(() => {
    window.localStorage.clear();
    TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: store }],
    });
    service = TestBed.inject(AuthService);
  });

  describe("When its checkToken method is called", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.checkToken).toBe("function")
    })
  })

  describe("When the getIthem method from localStorage is called and the token exists", () => {
    test("Then it should return true", () => {
      const mockId = "token";
      const mockJson = { data: "mockData" }

      const mockSotorageSet = jest.spyOn(localStorageMock, "setItem")
      const mockSotorageGet = jest.spyOn(localStorageMock, 'getItem');
      const setLocalStorage = (id: string, data: localStorageStore) => {
        window.localStorage.setItem(id, JSON.stringify(data));
      };

      setLocalStorage(mockId, mockJson)

      expect(service.checkToken()).toBe(true)
    })
  })

  describe("When the getIthem method from localStorage is called and the token don't exists", () => {
    test('Then it should return true', () => {
      const mockId = '1';
      const mockJson = { data: 'mockData' };

      const mockSotorageSet = jest.spyOn(localStorageMock, 'setItem');
      const mockSotorageGet = jest.spyOn(localStorageMock, 'getItem');
      const setLocalStorage = (id: string, data: localStorageStore) => {
        window.localStorage.setItem(id, JSON.stringify(data));
      };

      setLocalStorage(mockId, mockJson);

      expect(service.checkToken()).toBe(false);
    });
  });
});
