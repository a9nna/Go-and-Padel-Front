import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { MatchesComponent } from '../matches/matches.component';
import { MatchComponent } from './match.component';

const renderComponent = async () => {
  await render(MatchComponent, {
    componentInputs: {
      allMatches: [
        {
          allowedPlayersNumber: 4,
          category: 'mixt',
          date: new Date('2023-03-07T13:00:00.000+00:00'),
          image: '',
          level: '2.0',
          paddleCourt: 3,
          signedPlayersNumber: 1,
        },
        {
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
    declarations: [MatchesComponent],
  });
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
  })
});
