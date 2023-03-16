import { Component, Inject } from '@angular/core';
import { type Match } from 'src/app/match.model';
import { MatchesService } from '../../services/matches/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent {
  matches: Match[] = [];

  constructor(
    @Inject(MatchesService) private readonly matchesService: MatchesService
  ) {}

  getMatches() {
    this.matchesService.getMatches().subscribe({
      next: (allMatches) => {
        this.matches = allMatches;
      },
    });
  }

  ngOnInit() {
    this.getMatches();
  }
}
