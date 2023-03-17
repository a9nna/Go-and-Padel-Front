import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { showLoading } from '../../store/ui/actions/ui.actions';
import { selectIsLoading } from '../../store/ui/reducers/ui.reducers';

@Injectable({
  providedIn: 'root',
})

export class UiService {

  constructor(@Inject(Store) private readonly store: Store){}

  showLoader() {
    this.store.dispatch(showLoading());
  }

  getLoader(){
    this.store.select(selectIsLoading);
  }
}