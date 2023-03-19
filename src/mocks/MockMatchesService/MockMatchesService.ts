import { HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type MatchData, type Match } from '../../app/match.model';
import mockMatches from '../mockMatches/mockMatches';
import mockStore from '../mockStore/mockStore';

@Injectable({
  providedIn: 'root',
})
export class MockMatchesService {
  api = '';
  private readonly http = HttpTestingController;
  private readonly store = mockStore;

  getMatches(): Observable<Match[]> {
    const matches = of(mockMatches);

    return matches;
  }

  deleteMatch(match: Match): Observable<Match[]> {
    const deletedMatch = of([match]);

    return deletedMatch
  }

  createMatch(matchData: MatchData): Observable<Match[]> {
    return this.getMatches();
  }
}
