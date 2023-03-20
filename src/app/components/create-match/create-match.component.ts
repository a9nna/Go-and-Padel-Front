import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectEmail } from '../../store/users/reducers/user.reducer';
import { type Match } from '../../match.model';
import { MatchesService } from '../../services/matches/matches.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss'],
})
export class CreateMatchComponent {
  date: Date = new Date(Date.now());

  levels = ['1.0', '2.0', '3.0', '4.0'];

  categories = ['mixt', 'masculine', 'feminine'];

  allowedPlayersNumber = [2, 4];

  paddleCourt = [1, 2, 3, 4, 5, 6, 7];

  createForm: FormGroup = this.formBuilder.group({
    creator: this.store.select(selectEmail),
    date: [ formatDate(this.date, 'full', 'en'), [Validators.required] ],
    level: [ '1.0', [Validators.required] ],
    category: [ 'mixt', [Validators.required] ],
    allowedPlayersNumber: [ 2, Validators.required ],
    paddleCourt: [ 1, Validators.required ],
    image: [ '', Validators.required ],
    signedPlayersNumber: [ 0 ]
  });

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(MatchesService) private readonly matchesService: MatchesService,
    @Inject(Router) private readonly router: Router,
    @Inject(Store) private readonly store: Store
  ) {}

  onSubmit() {
    const matchData = this.createForm.value as Match;

    this.matchesService.createMatch(matchData).subscribe({
      next: () => {
        (async () => this.router.navigate(['']))();
      },
    });
  }
}
