import { render } from '@testing-library/angular';
import { Store } from '@ngrx/store';
import '@testing-library/jest-dom';
import { MatchesService } from '../../services/matches/matches.service';
import { MockMatchesService } from '../../../mocks/MockMatchesService/MockMatchesService';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from '../match/match.component';
import mockStore from '../../../mocks/mockStore/mockStore';
import mockMatches from '../../../mocks/mockMatches/mockMatches';

const renderComponent = async () => {
  const matchesService = new MockMatchesService();
  const store = mockStore();

  await render(MatchesComponent, {
    declarations: [ MatchComponent ],
    componentProperties: {
      match: mockMatches[0],
    },
    providers: [
      { provide: MatchesService, useValue: matchesService },
      { provide: Store, useValue: store}
    ],
  });

  return { matchesService, store };
};

describe('Given a MatchesComponent', () => {
  describe('When its getMatches method is called', () => {
    test('Then its type is a function', async () => {
      await renderComponent();

      const matchesComponent = MatchesComponent.prototype

      expect(typeof matchesComponent.getMatches).toBe('function');
    });
  });

  describe('When its ngOnInit method is called', () => {
    test('Then its type is function', async () => {
      await renderComponent();

      const matchesComponent = MatchesComponent.prototype

      expect(typeof matchesComponent.ngOnInit).toBe('function');
    });

    test('Then it calls getMatches method', async () => {
      const { matchesService } = await renderComponent();

      const matchesComponent = new MatchesComponent(
        matchesService as unknown as MatchesService
      );
      jest.spyOn(matchesComponent, 'getMatches');
      matchesComponent.ngOnInit();

      expect(matchesComponent.getMatches).toHaveBeenCalled();
    });
  });

  describe("When its deleteMatch method is called", () => {
    test("Then its type is 'function'", async() => {
      await renderComponent();

      const matchesComponent = MatchesComponent.prototype

      expect(typeof matchesComponent.deleteMatch).toBe('function')
    })
  })
});
