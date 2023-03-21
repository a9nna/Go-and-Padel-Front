import { Store } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";
import { render, screen } from "@testing-library/angular";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import mockStore from "../../../mocks/mockStore/mockStore";
import { UiService } from "../../services/ui/ui.service";
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

  describe("When it press the button with 'continue' text", () => {
    test.only("Then it should call its onHide method", async () => {
      const mockUiService = {
        hideModal: jest.fn()
      };
      const store = mockStore();
      const text = "continue"

      await render(ModalComponent, {
        providers: [
          { provider: UiService, useValue: mockUiService},
          { provide: Store, useValue: store}
        ]
      })

      const onHideSpy = jest.spyOn(ModalComponent.prototype, "onHide")
      const button = screen.getByRole("button",{
        name: text
      })

      await userEvent.click(button)

      expect(onHideSpy).toHaveBeenCalled();
    })
  })
})
