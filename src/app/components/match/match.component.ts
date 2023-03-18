import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Match } from 'src/app/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent {
  @Input() allMatches: Match[] = [];
  @Output() matchToDelete = new EventEmitter<Match>();

  deleteAriaLabel = 'Delete match';

  onDelete(match: Match) {
    this.matchToDelete.emit(match);
  }
}
