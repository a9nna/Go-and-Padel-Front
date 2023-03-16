import { Component, Input } from '@angular/core';
import { type Match } from 'src/app/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent {
  @Input() allMatches: Match[] = [];
}
