import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { HomePageComponent } from './home-page.component';


describe('Given a HomePageComponent', () => {
  describe("When is rendered", () => {
    test("Then it should show a heading 'home-page works!'", async() => {
      const text = 'home-page works!';

      await render(HomePageComponent);
      const heading = screen.getByRole("heading", {
        name: text,
        level: 1
      })

      expect(heading).toBeInTheDocument();
    });
  })
});
