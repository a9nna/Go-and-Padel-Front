import { HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type Match } from 'src/app/match.model';
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
}
