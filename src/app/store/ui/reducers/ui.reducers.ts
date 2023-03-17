import { createFeature, createReducer, on } from "@ngrx/store";
import { type UiState } from "src/app/ui.model";
import { showLoading } from "../actions/ui.actions";

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
    }))
  )
})

export const { name, reducer, selectIsLoading, selectUiState } = uiFeature
