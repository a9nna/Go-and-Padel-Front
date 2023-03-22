import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { type Match } from '../../match.model';
import { selectEmail} from '../../store/users/reducers/user.reducer';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],

})
export class MatchComponent {
  @Input() match: Match = {
    creator: '',
    allowedPlayersNumber: 0,
    category: '',
    date: new Date(),
    id: '',
    image: '',
    level: '',
    paddleCourt: 1,
    signedPlayersNumber: 0,
  };

  @Input()
  index!: number;

  @Output() matchToDelete = new EventEmitter<Match>();

  deleteAriaLabel = 'Delete match';

  email$: Observable<string> = this.store.select(selectEmail);

  constructor(@Inject(Store) private readonly store: Store) {}

  onDelete(match: Match) {
    this.matchToDelete.emit(match);
  }
}
