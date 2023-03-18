import { provideMockStore } from '@ngrx/store/testing';
import { render , screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { type Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LoaderComponent } from './components/loader/loader.component';
import { UiService } from './services/ui/ui.service';
import { selectIsLoading } from './store/ui/reducers/ui.reducers';

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
  });
});
