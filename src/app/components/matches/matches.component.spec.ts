import { render } from '@testing-library/angular';
import { MatchesService } from '../../services/matches/matches.service';
import { MockMatchesService } from '../../../mocks/MockMatchesService/MockMatchesService';
import { MatchesComponent } from './matches.component';

const renderComponent = async () => {
  const matchesService = new MockMatchesService();
  await render(MatchesComponent, {
    providers: [
      { provide: MatchesService, useValue: matchesService },
    ],
  });

  return { matchesService };
};

describe('Given a MatchesComponent', () => {
  describe("When its getMatches method is called", () => {
    test("Then its type is a function", async() => {
      const { matchesService } = await renderComponent();

      const matchesComponent = new MatchesComponent(matchesService as unknown as  MatchesService);

      expect(typeof matchesComponent.getMatches).toBe("function")
    })
  })

  describe("When its ngOnInit method is called", () => {
    test("Then its type is function", async() => {
      const { matchesService } = await renderComponent();

      const matchesComponent = new MatchesComponent(matchesService as unknown as  MatchesService);

      expect(typeof matchesComponent.ngOnInit).toBe("function")
    })

    test("Then it calls getMatches method", async() => {
      const { matchesService } = await renderComponent();

      const matchesComponent = new MatchesComponent(matchesService as unknown as  MatchesService);
      jest.spyOn(matchesComponent, "getMatches");
      matchesComponent.ngOnInit();

      expect(matchesComponent.getMatches).toHaveBeenCalled()
    })
  })
});
