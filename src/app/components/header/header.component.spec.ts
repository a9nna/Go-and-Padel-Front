import { render, screen } from "@testing-library/angular"
import '@testing-library/jest-dom';
import { HeaderComponent } from "./header.component"

describe("Given a HeaderComponent", () => {
  describe("When is rendered", () => {
    test("Then it should shoug the Go and Padel logo", async() => {
      const logoText = /go and padel logo/i;

      await render(HeaderComponent);
      const logo = screen.getByText(logoText);

      expect(logo).toBeInTheDocument();
    })
  })
})
