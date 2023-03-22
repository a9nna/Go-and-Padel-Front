import { render, screen } from "@testing-library/angular";
import '@testing-library/jest-dom';
import { NotFoundPageComponent } from "./not-found-page.component";

describe('Given a NotFoundPageComponent', () => {
  describe('When is rendered', () => {
    test("Then it should show the text 'Page not found'", async () => {
      const text = /page not found/i;

      await render(NotFoundPageComponent);

      const title = screen.getByText(text);

      expect(title).toBeInTheDocument();
    });
  });
});
