import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { UiService } from '../../services/ui/ui.service';
import { selectIsError } from '../../store/ui/reducers/ui.reducers';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  error$: Observable<boolean> = this.store.select(selectIsError);

  constructor(
    @Inject(Store) private readonly store: Store,
    @Inject(UiService) private readonly uiService: UiService,
  ){}

  onHide() {
    this.uiService.hideModal();
  }
}
