import { provideMockStore } from "@ngrx/store/testing";
import { render, screen } from "@testing-library/angular";
import '@testing-library/jest-dom';
import { selectIsError } from '../../store/ui/reducers/ui.reducers';
import { ModalComponent } from "./modal.component";

describe("Given a ModalComponent", () => {
  describe("When is rendered and isError is setted on true", () => {
    test("Then it should show 'Mission failed!'", async() => {
      const text = 'Mission failed!';
      await render(ModalComponent,
        {
          providers: [
            provideMockStore({
              selectors: [
                { selector: selectIsError, value: true}
              ]
            })
          ]
        })

      const message = screen.getByText(text)

      expect(message).toBeInTheDocument()
    });
  })
  describe('When is rendered and isError is setted on false', () => {
    test("Then it should show 'Mission successful!'", async () => {
      const text = 'Mission successful!';
      await render(ModalComponent, {
        providers: [
          provideMockStore({
            selectors: [{ selector: selectIsError, value: false }],
          }),
        ],
      });

      const message = screen.getByText(text);

      expect(message).toBeInTheDocument();
    });
  });
})
