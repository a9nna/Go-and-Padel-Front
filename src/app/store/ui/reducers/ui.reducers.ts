import { createFeature, createReducer, on } from "@ngrx/store";
import { type UiState } from "src/app/ui.model";
import { hideLoading, hideModal, showLoading, showModalSuccess} from '../actions/ui.actions';

const initialState: UiState = {
  isLoading: false,
  isModal: false,
  isError: false,
}

export const uiFeature = createFeature({
  name: "ui",
  reducer: createReducer(
    initialState,
    on(showLoading, (state): UiState => ({
      ...state,
      isLoading: true
    })),
    on(hideLoading, (state): UiState => ({
      ...state,
      isLoading:false
    })),
    on(showModalSuccess, (state): UiState => ({
      ...state,
      isModal: true,
      isError: false,
    })),
    on(hideModal, (state): UiState => ({
      ...state,
      isModal: false,
    }))
  )
})

export const { name, reducer, selectIsLoading, selectUiState, selectIsModal, selectIsError } = uiFeature
