
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { selectIsLoading } from './store/ui/reducers/ui.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/styles.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);

  constructor(
    @Inject(Store) private readonly store: Store,
  ) {}
}
