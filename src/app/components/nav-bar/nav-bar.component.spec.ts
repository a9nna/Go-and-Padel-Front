import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { NavBarComponent } from './nav-bar.component';

describe('Given a HeaderComponent', () => {
  describe('When is rendered', () => {
    test('Then it should show a button with "home" accessible text', async () => {
      const buttonText = /home/i;

      await render(NavBarComponent);
      const button = screen.getByRole("link",  {
        name: buttonText
      });

      expect(button).toBeInTheDocument();
    });

    test('Then it should show a button with "create" accessible text', async () => {
      const buttonText = /create/i;

      await render(NavBarComponent);
      const button = screen.getByRole('link', {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });

    test('Then it should show a button with "login" accessible text', async () => {
      const buttonText = /login/i;

      await render(NavBarComponent);
      const button = screen.getByRole('link', {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
