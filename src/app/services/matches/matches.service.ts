import { HttpClient, HttpHeaders, type HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, type Observable } from 'rxjs';
import { Router } from '@angular/router';
import { type MatchData, type Match } from '../../match.model';
import { environment } from '../../../environments/environment';
import { type Environment } from '../../../types';
import { deleteMatch, loadMatches } from '../../store/matches/actions/matches.actions';
import { selectMatchesState } from '../../store/matches/reducers/matches.reducer';
import { UiService } from '../ui/ui.service';
import { loadMatch } from '../../store/match/actions/match.actions';
import { selectMatchState } from '../../store/match/reducers/match.reducer';

export const {
  apiUrl,
  path: { matches, remove, create }
} = environment as Environment;

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  public api = `${apiUrl}${matches}`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(Store) private readonly store: Store,
    @Inject(UiService) private readonly uiService: UiService,
    @Inject(Router) private readonly router: Router
  ) {}

  getMatches(): Observable<Match[]> {
    this.uiService.showLoader();
    const req = this.http
      .get<{ matches: Match[] }>(this.api)
      .pipe(catchError(this.handleError));

    req.subscribe({
      next: (matches) => {
        const { matches: allMatches } = matches;

        this.store.dispatch(loadMatches({ matches: allMatches }));
        this.uiService.hideLoader();
      },
      error: () => {
        this.uiService.hideLoader();
        this.uiService.showModalError();
      },
    });

    return this.store.select(selectMatchesState);
  }

  deleteMatch(match: Match): Observable<Match[]> {
    this.uiService.showLoader();

    const { id } = match;
    const req = this.http
      .delete<{ idMatch: string }>(`${this.api}${remove}${id}`)
      .pipe(catchError(this.handleError));

    req.subscribe({
      next: (data) => {
        this.store.dispatch(deleteMatch({ idMatch: data.idMatch }));
        this.uiService.showModalSuccess();
        this.uiService.hideLoader();
      },
      error: () => {
        this.uiService.hideLoader();
        this.uiService.showModalError();
      },
    });

    return this.store.select(selectMatchesState);
  }

  createMatch(matchData: MatchData): Observable<Match[]> {
    this.uiService.showLoader();
    const req = this.http
      .post<MatchData>(`${this.api}${create}`, matchData, this.httpOptions)
      .pipe(catchError(this.handleError));

    req.subscribe({
      next: () => {
        (async () => this.router.navigate(['']))();
        this.uiService.showModalSuccess();
      },
      error: () => {
        this.uiService.hideLoader();
        this.uiService.showModalError();
      },
    });

    return this.store.select(selectMatchesState);
  }

  getMatch(match: Match): Observable<Match> {
    this.uiService.showLoader();

    const { id } = match;

    const req = this.http
      .get<{ match: Match }>(`${this.api}${id}`)
      .pipe(catchError(this.handleError));

    req.subscribe({
      next: (match) => {

        this.store.dispatch(loadMatch(match));
        this.uiService.hideLoader();
      },
      error: () => {
        this.uiService.hideLoader();
        this.uiService.showModalError();
      },
    });

    return this.store.select(selectMatchState);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
