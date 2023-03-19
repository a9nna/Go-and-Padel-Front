import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { type Match } from '../../match.model';
import mockMatches from '../../../mocks/mockMatches/mockMatches';
import mockStore from '../../../mocks/mockStore/mockStore';
import { create, MatchesService, remove } from './matches.service';
import { CreateMatchComponent } from '../../components/create-match/create-match.component';

describe('Given a MatchesService', () => {
  let service: MatchesService;
  let httpController: HttpTestingController;
  let store: Partial<Store>;

  beforeEach(() => {
    store = mockStore();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CreateMatchComponent],
      providers: [
        { provide: Store, useValue: store }, MatchesService
      ],
    });
    service = TestBed.inject(MatchesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When you call its getMatches method', () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.getMatches).toBe('function');
    });

    test('Then it should call dispatch method with loadMatches action creator', () => {
      const allMatches: Match[] = [];

      const dispatchSpy = jest.spyOn(store, 'dispatch');

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
    test('Then it should call its handleError method', () => {
      const errorResponse = new ProgressEvent('Internal server error');

      const handleErrorSpy = jest.spyOn(service, 'handleError');

      service.getMatches();
      const request = httpController.expectOne({
        method: 'GET',
        url: `${service.api}`,
      });
      request.error(errorResponse);
      httpController.verify();

      expect(handleErrorSpy).toHaveBeenCalled();
    });
  });

  describe("When you call its deleteMatch method", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.deleteMatch).toBe('function');
    })

    test("Then it should call dispatch method with deleteMatch action creator", () => {
      const dispatchSpy = jest.spyOn(store, "dispatch");

      service.deleteMatch(mockMatches[0]);
      const request = httpController.expectOne({
        method: 'DELETE',
        url: `${service.api}${remove}1`
      })
      request.flush(mockMatches);
      httpController.verify();

      expect(dispatchSpy).toHaveBeenCalled();
    })
  })

  describe('When you call its deleteMatch method and the Observable receives an error', () => {
    test("Then it should call its handleError method", () => {
      const errorResponse = new ProgressEvent('Internal server error');

      const handleErrorSpy = jest.spyOn(service, 'handleError');

      service.deleteMatch(mockMatches[0]);
      const request = httpController.expectOne({
        method: 'DELETE',
        url: `${service.api}${remove}1`,
      });
      request.error(errorResponse);
      httpController.verify();

      expect(handleErrorSpy).toHaveBeenCalled();
    })
  });

  describe("When you call its createMatch method", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.createMatch).toBe("function");
    })

    test("Then it should make a request with POST method and /matches/create path", () => {
      const matchData: Match = mockMatches[0];

      service.createMatch(matchData)
      const request = httpController.expectOne({
        method: 'POST',
        url: `${service.api}${create}`,
      });
      request.flush(mockMatches[0]);
      httpController.verify();

      expect(request.request.method).toEqual('POST');
    })
  })
});
