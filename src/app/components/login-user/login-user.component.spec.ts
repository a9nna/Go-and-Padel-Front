import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { render, screen, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { UsersService } from '../../services/users/users.service';
import mockStore from '../../../mocks/mockStore/mockStore';
import { MockUsersService } from '../../../mocks/MockUsersService/MockUsersService';
import {
  LoginUserComponent
} from './login-user.component';
import { type UserCredentials } from 'src/app/user.model';

const renderComponent = async () => {
  const store = mockStore();
  const usersService = new MockUsersService()

  await render(LoginUserComponent, {
    imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    providers: [
      { provide: UsersService, useValue: usersService},
      HttpClientTestingModule,
      FormBuilder,
      { provide: Store, useValue: store },
      { provide: String, useValue: 'stringValue' },
    ],
  });

  return {store , usersService}
}

describe('Given a LoginUserComponent', () => {
  describe('When the component is rendered', () => {
    test("Then it should show an input with 'Email' text", async () => {
      const text = 'Email';

      await renderComponent();
      const emailInput = screen.getByLabelText(text);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with 'Password' text", async () => {
      const text = 'Password';

      await renderComponent();
      const passwordInput = screen.getByLabelText(text);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with 'Log in' text", async () => {
      const text = 'Log in';

      await renderComponent();
      const loginButton = screen.getByRole('button', {
        name: text,
      });

      expect(loginButton).toBeInTheDocument();
    });

    test("Then it should show 'Haven't you played here?' text", async () => {
      const text = "Haven't you played here?";

      await renderComponent();
      const question = screen.getByText(text);

      expect(question).toBeInTheDocument();
    });

    test("Then it should show a link with 'Sign up' text", async () => {
      const text = 'Sign up';

      await renderComponent();
      const linkInput = screen.getByRole('link', {
        name: text,
      });

      expect(linkInput).toBeInTheDocument();
    });
  });

  describe("When 'user@user.com' is written on email input", () => {
    test("Then the email input must show 'user@user.com'", async() => {
      const text = 'Email';
      const emailInputValue = 'user@user.com';

      await renderComponent();

      const emailInput = screen.getByLabelText(text) ;

      await userEvent.click(emailInput);
      await userEvent.type(emailInput, emailInputValue);

      expect(emailInput).toHaveValue(emailInputValue);
    });
  });

  describe("When 'holaholahola' is written on password input", () => {
    test("Then the password input must show 'holaholahola'", async() => {
      const text = 'Password';
      const passwordInputValue = 'holaholahola';

      await renderComponent();

      const passwordInput = screen.getByLabelText(text);

      await userEvent.click(passwordInput);
      await userEvent.type(passwordInput, passwordInputValue);

      expect(passwordInput).toHaveValue(passwordInputValue);
    });
  });

  describe("When the user submits the form with email 'user@user.com' and password '12345678' and are correct", () => {
    test("Then dispatch should be invoked with loginUser Action", async() => {
      const userCredentials: UserCredentials = {
        email: 'user@user.com',
        password: '12345678',
      };
      const emailText = 'Email';
      const passwordText = 'Password';
      const buttonText = 'Log in';

      const { store } = await renderComponent();

      const emailInput = screen.getByLabelText(emailText);
      const passwordInput = screen.getByLabelText(passwordText);
      const loginButton = screen.getByRole('button', {
        name: buttonText,
      });

      await userEvent.click(emailInput);
      await userEvent.type(emailInput, userCredentials.email);
      await userEvent.click(passwordInput);
      await userEvent.type(passwordInput, userCredentials.password);

      await waitFor(() => {
        expect(loginButton).toBeEnabled();
      });

      await userEvent.click(loginButton);

      await waitFor(() => {
        expect(store.dispatch).toHaveBeenCalled();
      });
    })
  })
});
