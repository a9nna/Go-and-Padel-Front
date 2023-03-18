import { HttpClient, type HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, type Observable } from 'rxjs';
import { type Match } from 'src/app/match.model';
import { environment } from '../../../environments/environment';
import { type Environment } from 'src/types';
import { deleteMatch, loadMatches } from '../../store/matches/actions/matches.actions';
import { selectMatchesState } from '../../store/matches/reducers/matches.reducer';
import { UiService } from '../ui/ui.service';

export const {
  apiUrl,
  path: { matches, remove }
} = environment as Environment;

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  public api = `${apiUrl}${matches}`;

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(Store) private readonly store: Store,
    @Inject(UiService) private readonly uiService: UiService
  ) {}

  getMatches(): Observable<Match[]> {
    const req = this.http
      .get<{ matches: Match[] }>(this.api)
      .pipe(catchError(this.handleError));

    req.subscribe({
      next: (matches) => {
        const { matches: allMatches } = matches;

        this.store.dispatch(loadMatches({ matches: allMatches }));
        this.uiService.hideLoader()
      },
    });

    return this.store.select(selectMatchesState);
  }

  deleteMatch( match: Match ): Observable<Match[]> {
    this.uiService.showLoader();

    const { id } = match;
    const req = this.http
      .delete<{ idMatch: string }>(`${this.api}${remove}${id}`)
      .pipe(catchError(this.handleError));

    req.subscribe((data) => {
      this.store.dispatch(deleteMatch({idMatch: data.idMatch}));
      this.uiService.hideLoader()
    })

    return this.store.select(selectMatchesState)
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
