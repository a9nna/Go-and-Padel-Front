import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen, waitFor } from '@testing-library/angular';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { routes } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { MatchesService } from '../../services/matches/matches.service';
import { MockMatchesService } from '../../../mocks/MockMatchesService/MockMatchesService';
import { CreateMatchComponent } from './create-match.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectEmail } from '../../store/users/reducers/user.reducer';

const renderComponent = async () => {
  const matchesService = new MockMatchesService()

  await render(CreateMatchComponent, {
    declarations: [AppComponent],
    imports: [
      ReactiveFormsModule,
      FormsModule,
      HttpClientTestingModule,
      RouterTestingModule.withRoutes(routes),
    ],
    providers: [
      { provide: MatchesService, useValue: matchesService },
      HttpClientTestingModule,
      FormBuilder,
      { provide: String, useValue: 'stringValue' },
      provideMockStore({
        selectors: [{selector:selectEmail, value: "ana@ana.com"}]
      })
    ],
  });

  return { matchesService };
};

describe('Given a CreateMatchComponent', () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with 'Create match' text", async() => {
      const text = /create a match/i;
      await renderComponent();

      const title = screen.getByRole("heading", {
        name: text,
        level: 1
      })

      expect(title).toBeInTheDocument();
    })

    test("Then it should show a input with 'Date' text", async() => {
      const text = /date/i;
      await renderComponent();

      const dayInput = screen.getByLabelText(text)

      expect(dayInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Level' text", async() => {
      const text = /level/i;
      await renderComponent();

      const levelInput = screen.getByLabelText(text)

      expect(levelInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Category' text", async() => {
      const text = /category/i;
      await renderComponent();

      const categoryInput = screen.getByLabelText(text)

      expect(categoryInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Number of players' text", async() => {
      const text = /number of players/i;
      await renderComponent();

      const numberOfPlayersInput = screen.getByLabelText(text)

      expect(numberOfPlayersInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Court' text", async() => {
      const text = /court/i;
      await renderComponent();

      const courtInput = screen.getByLabelText(text)

      expect(courtInput).toBeInTheDocument();
    })

    test("Then it should show a input with 'Image' text", async() => {
      const text = /image/i;
      await renderComponent();

      const imageInput = screen.getByLabelText(text)

      expect(imageInput).toBeInTheDocument();
    })

    test("Then it should show a button with 'Create a match' text", async() => {
      const text = /create a match/i;
      await renderComponent();

      const button = screen.getByRole("button", {
        name: text,
      })

      expect(button).toBeInTheDocument();
    })
  })

  describe("When the 'Create a match' button is clicked", () => {
    test("Then it should invoke its onSubmit method", async() => {
      const dateText = /date/i;
      const levelText = /level/i;
      const categoryText = /category/i;
      const playersText = /number of players/i;
      const courtText = /court/i;
      const imageText = /image/i;
      const buttonText = /create a match/i;

      const dateSelected = '2023-03-23T17:29';
      const levelSelected = '1.0';
      const categorySelected = 'mixt';
      const playersSelected = 2;
      const courtSelected = 3;
      const imageSelected =
        'https://media.istockphoto.com/id/1356565274/photo/modern-abstract-wavy-background.jpg?s=612x612&w=0&k=20&c=No67IAf0B1P6THxPiU2zI9zPVp6J6wEuf_8zEs3iHKw=';

      await renderComponent();
      const onSubmitSpy = jest.spyOn(CreateMatchComponent.prototype, "onSubmit");

      const dateInput = screen.getByLabelText(dateText)
      const levelInput = screen.getByLabelText(levelText)
      const categoryInput = screen.getByLabelText(categoryText);
      const numberOfPlayersInput = screen.getByLabelText(playersText);
      const courtInput = screen.getByLabelText(courtText);
      const imageInput = screen.getByLabelText(imageText);
      const button = screen.getByRole("button", {
        name: buttonText,
      })

      await userEvent.click(dateInput);
      await userEvent.type(dateInput, dateSelected);

      await userEvent.click(levelInput);
      await userEvent.selectOptions(levelInput, levelSelected);
      await userEvent.click(categoryInput);
      await userEvent.selectOptions(categoryInput, categorySelected);
      await userEvent.click(numberOfPlayersInput);
      await userEvent.selectOptions(numberOfPlayersInput, `${playersSelected}`);
      await userEvent.click(courtInput);
      await userEvent.selectOptions(courtInput, `${courtSelected}`);

      await userEvent.click(imageInput);
      await userEvent.type(imageInput, imageSelected)

      await waitFor(() => {
        expect(button).toBeEnabled();
      });

      await userEvent.click(button);

      await waitFor(() => {
        expect(onSubmitSpy).toHaveBeenCalled();
      })
    })
  })
});
