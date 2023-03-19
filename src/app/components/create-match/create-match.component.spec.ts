import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { CreateMatchComponent } from './create-match.component';

describe('Given a CreateMatchComponent', () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with 'Create match' text", async() => {
      const text = /create a match/i;
      await render(CreateMatchComponent)

      const title = screen.getByRole("heading", {
        name: text,
        level: 1
      })

      expect(title).toBeInTheDocument();
    })

    test("Then it should show a input with 'Day' text", async() => {
      const text = /day/i;
      await render(CreateMatchComponent)

      const dayInput = screen.getByLabelText(text)

      expect(dayInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Hour' text", async() => {
      const text = /hour/i;
      await render(CreateMatchComponent)

      const hourInput = screen.getByLabelText(text)

      expect(hourInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Level' text", async() => {
      const text = /level/i;
      await render(CreateMatchComponent)

      const hourInput = screen.getByLabelText(text)

      expect(hourInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Category' text", async() => {
      const text = /category/i;
      await render(CreateMatchComponent)

      const categoryInput = screen.getByLabelText(text)

      expect(categoryInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Number of players' text", async() => {
      const text = /number of players/i;
      await render(CreateMatchComponent)

      const numberOfPlayersInput = screen.getByLabelText(text)

      expect(numberOfPlayersInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Court' text", async() => {
      const text = /court/i;
      await render(CreateMatchComponent)

      const courtInput = screen.getByLabelText(text)

      expect(courtInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Image' text", async() => {
      const text = /image/i;
      await render(CreateMatchComponent)

      const imageInput = screen.getByLabelText(text)

      expect(imageInput).toBeInTheDocument();
    })

    test("Then it should show a button with 'Create a match' text", async() => {
      const text = /create a match/i;
      await render(CreateMatchComponent)

      const button = screen.getByRole("button", {
        name: text,
      })

      expect(button).toBeInTheDocument();
    })
  })
});
