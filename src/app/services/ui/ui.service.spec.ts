import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { showLoading } from '../../store/ui/actions/ui.actions';
import mockStore from '../../../mocks/mockStore/mockStore';
import { UiService } from './ui.service';
import { selectIsLoading } from '../../store/ui/reducers/ui.reducers';

describe('Given a UiService', () => {
  let service: UiService;
  const store = mockStore();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: store }],
    });
    service = TestBed.inject(UiService);
  });

  describe("When you call its showLoader method", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.showLoader).toBe("function");
    })

    test("Then dispatch should be called with showLoading action creator", () => {
      service.showLoader();

      expect(store.dispatch).toHaveBeenCalledWith(showLoading())
    })
  })

  describe("When you call its getLoader method", () => {
    test("Then its type must be 'function'", () => {
      expect(typeof service.getLoader).toBe("function");
    })

    test("Then select should be called with selectIsLoading selector", () => {
      service.getLoader();

      expect(store.select).toHaveBeenCalledWith(selectIsLoading)
    })
  })
});
