import { provideMockStore } from '@ngrx/store/testing';
import { render , screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { type Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { localStorageMock } from '../mocks/mockLocalStorege/mockLocalStorage';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LoaderComponent } from './components/loader/loader.component';
import { selectIsLoading } from './store/ui/reducers/ui.reducers';
import { type Store as localStorageStore } from 'src/types';
import mockStore from '../mocks/mockStore/mockStore';

describe('Given an App component', () => {
  const isLoading$: Observable<boolean> = of(true);

  const renderComponent = async () => {
    await render(AppComponent, {
      imports: [AppModule],
      declarations: [LoaderComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsLoading, value: isLoading$ },
          ],
        }),
      ],
    });
  };

  describe('When rendered', () => {
    test("Then it should show a text 'Load ng'", async () => {
      const text = 'Load ng'

      await renderComponent()
      const loading = screen.getByText(text)

      expect(loading).toBeInTheDocument()
    })

      test("Then it should check the localStorage for a token", async() => {
        const mockId = 'token';
        const mockJson = {
          data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDA3MzQ5MjU0ODYxMjE5MzE0YTY4OTYiLCJlbWFpbCI6ImFuYUBhbmEuY29tIiwiaWF0IjoxNjc5MzM2MDU3fQ.kI41DpVVl4CUL9MdPtJLH8mGTHQi97kqCJ2wKjvzDv4',
        };
        const store = mockStore();

        jest.spyOn(localStorageMock, 'setItem');
        jest.spyOn(localStorageMock, 'getItem');
        const setLocalStorage = (id: string, data: localStorageStore) => {
          window.localStorage.setItem(id, JSON.stringify(data));
        };

        setLocalStorage(mockId, mockJson);

        await render(AppComponent, {
          imports: [AppModule],
          declarations: [LoaderComponent],
          providers: [
            { provider: Store, useValue: store }
          ],
        });

        expect(localStorageMock.setItem).toHaveBeenCalled()
    })
  });
});
