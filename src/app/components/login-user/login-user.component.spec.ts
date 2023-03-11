import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { LoginUserComponent } from './login-user.component';

describe('Given a LoginUserComponent', () => {
  describe('When the component is rendered', () => {
    test("Then it should show an input with 'Email' text", async () => {
      const text = 'Email';

      await render(LoginUserComponent);
      const emailInput = screen.getByLabelText(text);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with 'Password' text", async () => {
      const text = 'Password';

      await render(LoginUserComponent);
      const passwordInput = screen.getByLabelText(text);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with 'Log in' text", async () => {
      const text = 'Log in';

      await render(LoginUserComponent);
      const buttonInput = screen.getByRole('button', {
        name: text,
      });

      expect(buttonInput).toBeInTheDocument();
    });

    test("Then it should show 'Haven't you played here?' text", async () => {
      const text = "Haven't you played here?";

      await render(LoginUserComponent);
      const question = screen.getByText(text);

      expect(question).toBeInTheDocument();
    });

    test("Then it should show a link with 'Sign up' text", async () => {
      const text = 'Sign up';

      await render(LoginUserComponent);
      const linkInput = screen.getByRole('link', {
        name: text,
      });

      expect(linkInput).toBeInTheDocument();
    });
  });
});
