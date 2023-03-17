import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { LoaderComponent } from './loader.component';

describe('Given a LoaderComponent', () => {
  describe('When is rendered', () => {
    test("Then it should show a 'Load ng' text", async() => {
      const text = 'Load ng';
      await render(LoaderComponent)

      const loadingText = screen.getByText(text)

      expect(loadingText).toBeInTheDocument();
    })
  });
});
