import { createFeature, createReducer, on } from "@ngrx/store";
import { type UiState } from "src/app/ui.model";
import { hideLoading, showLoading } from '../actions/ui.actions';

const initialState: UiState = {
  isLoading: false
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
    }))
  )
})

export const { name, reducer, selectIsLoading, selectUiState } = uiFeature
