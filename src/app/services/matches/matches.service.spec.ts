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

  describe('When you call its createMatch method and the Observable receives an error', () => {

    test("Then it should throw an error", () => {
      const matchData: Match = mockMatches[0];
      const errorResponse = new ProgressEvent('Internal server error');

      const handleErrorSpy = jest.spyOn(service, 'handleError');

      service.createMatch(matchData);
      const request = httpController.expectOne({
        method: 'POST',
        url: `${service.api}${create}`,
      });
      request.error(errorResponse);
      httpController.verify();

      expect(handleErrorSpy).toHaveBeenCalled();
    })
  })

  describe("When you call its getMatch method", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.getMatch).toBe("function");
    })

    test("Then it should call dispatch", () => {
      const match: Match = {
        creator: 'ana@ana.com',
        category: 'masculine',
        date: new Date('2023-03-07T13:00:00.000Z'),
        level: '4.0',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image:
          'https://res.cloudinary.com/dpgfwla0c/image/upload/v1679378008/tree-736885__340_nogwlu.webp',
        allowedPlayersNumber: 4,
        id: '64119548e31a7cbed9c85afa',
      };

      const dispatchSpy = jest.spyOn(store, 'dispatch');

      service.getMatch(match);
      const request = httpController.expectOne({
        method: 'GET',
        url: `${service.api}${match.id}`,
      });
      request.flush(match);
      httpController.verify();

      expect(dispatchSpy).toHaveBeenCalled();
    })
  })

  describe('When you call its getMatch method and the Observable receives an error', () => {

    test("Then it should throw an error", () => {
      const match: Match = {
        creator: 'ana@ana.com',
        category: 'masculine',
        date: new Date('2023-03-07T13:00:00.000Z'),
        level: '4.0',
        paddleCourt: 7,
        signedPlayersNumber: 2,
        image:
          'https://res.cloudinary.com/dpgfwla0c/image/upload/v1679378008/tree-736885__340_nogwlu.webp',
        allowedPlayersNumber: 4,
        id: '64119548e31a7cbed9c85afa',
      };
      const errorResponse = new ProgressEvent('Internal server error');

      const handleErrorSpy = jest.spyOn(service, 'handleError');

      service.getMatch(match);
      const request = httpController.expectOne({
        method: 'GET',
        url: `${service.api}64119548e31a7cbed9c85afa`,
      });
      request.error(errorResponse);
      httpController.verify();

      expect(handleErrorSpy).toHaveBeenCalled();
    })
  })
});
