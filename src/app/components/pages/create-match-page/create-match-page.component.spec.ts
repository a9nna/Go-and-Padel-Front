import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { render, screen } from "@testing-library/angular";
import '@testing-library/jest-dom';
import { routes } from "../../../app-routing.module";
import { selectEmail } from "../../../store/users/reducers/user.reducer";
import { CreateMatchComponent } from "../../create-match/create-match.component";
import { CreateMatchPageComponent } from "./create-match-page.component";

describe('Given a CreateMatchPageComponent', () => {
  describe('When is rendered', () => {
    test("Then it should show a heading with 'Create match' text", async () => {
      const text = /create a match/i;

      await render(CreateMatchPageComponent, {
        declarations: [CreateMatchComponent],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule.withRoutes(routes),
          ReactiveFormsModule,
        ],
        providers: [
          provideMockStore({
            selectors: [{ selector: selectEmail, value: 'ana@ana.com' }],
          }),
          FormBuilder,
        ],
      });

      const title = screen.getByRole('heading', {
        name: text,
        level: 1,
      });

      expect(title).toBeInTheDocument();
    });
  })
})
