import { Store } from '@ngrx/store';
import { render, screen, waitFor } from '@testing-library/angular';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatchesService } from '../../services/matches/matches.service';
import mockStore from '../../../mocks/mockStore/mockStore';
import { MatchesComponent } from '../matches/matches.component';
import { MatchComponent } from './match.component';

const renderComponent = async () => {
  const store = mockStore();
  const matchesService = {
    deleteMatch: jest.fn()
  };

  await render(MatchComponent, {
    componentProperties: {
      allMatches: [
        {
          id: '1',
          allowedPlayersNumber: 4,
          category: 'mixt',
          date: new Date('2023-03-07T13:00:00.000+00:00'),
          image: '',
          level: '2.0',
          paddleCourt: 3,
          signedPlayersNumber: 1,
        },
        {
          id: '2',
          allowedPlayersNumber: 4,
          category: '',
          date: new Date(),
          image: '',
          level: '',
          paddleCourt: 3,
          signedPlayersNumber: 4,
        },
      ],
    },
    imports: [HttpClientTestingModule],
    declarations: [MatchesComponent],
    providers: [
      { provide: Store, useValue: store },
      HttpClientTestingModule,
      { provide: MatchesService, useValue: matchesService },
    ],
  });

  return {store, matchesService}
};

describe('Given a MatchComponent', () => {
  describe("When is rendered", () => {
    test("Then it should show an image with description 'Paddle court image'", async() => {
      const text = 'Paddle court image';

      await renderComponent();
      const image = screen.getAllByAltText(text);

      expect(image[0]).toBeInTheDocument();
    })

    test("Then it should show a 'Tuesday 07, 02:00 PM' text", async() => {
      const day = 'Tuesday 07, ';
      const hourText =
        new Date('2023-03-07T13:00:00.000+00:00').getHours() > 12
          ? new Date('2023-03-07T13:00:00.000+00:00').getHours() - 12
          : new Date('2023-03-07T13:00:00.000+00:00').getHours();
      const minutes = ':00'
      const fullDate = `${day}0${hourText}${minutes} PM`

      await renderComponent();
      const date = screen.getByText(fullDate);

      expect(date).toBeInTheDocument();
    })

    test("Then it should show a '2.0 mixt' test without a class", async() => {
      const text = '2.0 mixt';

      await renderComponent()
      const category = screen.getByText(text);

      expect(category).toBeInTheDocument();
    })

    test("Then it should show '3 spots left!' text", async() => {
      const text = '3 spots left!';

      await renderComponent();
      const spots = screen.getByText(text);

      expect(spots).toBeInTheDocument();
      expect(spots).not.toHaveClass('info__spots__no-spots');
    })

    test("Then it should show 'No spots left!' text with 'info__spots__no-spots' class", async () => {
      const text = 'No spots left!';

      await renderComponent();
      const spots = screen.getByText(text);

      expect(spots).toBeInTheDocument();
      expect(spots).toHaveClass('info__spots__no-spots');
    });

    test("Then it should show a button with 'Delete match' accesibility text", async() => {
      const text = /delete match/i;

      await renderComponent();
      const button = screen.getAllByRole("button", {
        name: text,
      })

      expect(button[0]).toBeInTheDocument();
    })
  })

  describe("When the button with 'Delete match' accessibility is clicked", () => {
    test("Then its onDelete method should be called", async() => {
      const text = /delete match/i;

      await renderComponent();
      const onDeleteSpy = jest.spyOn(MatchComponent.prototype, "onDelete")
      const deleteButton = screen.getAllByRole("button", {
        name: text,
      })

      await waitFor(() => {
        expect(deleteButton[0]).toBeInTheDocument()
      })

      await userEvent.click(deleteButton[0]);

      expect(onDeleteSpy).toHaveBeenCalled()

    })
  })
});
