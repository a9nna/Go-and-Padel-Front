import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { type Match } from 'src/app/match.model';
import mockStore from '../../../mocks/mockStore/mockStore';
import { MatchesService } from './matches.service';

describe('Given a MatchesService', () => {
  let service: MatchesService;
  let httpController: HttpTestingController;
  let store: Partial<Store>;

  beforeEach(() => {
    store = mockStore();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: Store, useValue: store }],
    });
    service = TestBed.inject(MatchesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('When you call its getMatches method', () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.getMatches).toBe('function');
    });

    test('Then it should call dispatch method with loadMatches action creator', () => {
      const allMatches: Match[] = [];

      const dispatchSpy = jest.spyOn(store, 'dispatch').mockImplementation();

      service.getMatches();
      const request = httpController.expectOne({
        method: 'GET',
        url: `${service.api}`,
      });
      request.flush(allMatches);
      httpController.verify();

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe('When you call ist getMatches method and the Observable receives an error', () => {
    test('Then it should call its handleError meethod', () => {
      const errorResponse = new ProgressEvent('Internal server error');

      const handleErrorSpy = jest.spyOn(service, 'handleError');

      service.getMatches();
      const request = httpController.expectOne({
        method: 'GET',
        url: `${service.api}`,
      });
      request.error(errorResponse);

      expect(handleErrorSpy).toHaveBeenCalled();
    });
  });
});
