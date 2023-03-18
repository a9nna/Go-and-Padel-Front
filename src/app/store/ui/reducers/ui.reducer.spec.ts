import { type UiState } from "src/app/ui.model"
import { hideLoading, showLoading } from "../actions/ui.actions"
import { reducer } from "./ui.reducers"

describe("Given a uiFeature", () => {
  describe("When it receives an initial state and a showLoading action with a isLoading setted on false", () => {
    test("Then it should return the new state with isLoading setted on true", () => {
      const initialState: UiState = {
        isLoading: false
      }
      const expectedLoading: UiState = {
        isLoading: true
      }

      const newState = reducer(initialState, showLoading())


      expect(newState).toStrictEqual(expectedLoading)
    })
  })

  describe("When it receives an initial state and hideLoading action with a isLoading setted on true", () => {
    test("Then it should return the new state with isLoading setted on false", () => {
      const initialState: UiState = {
        isLoading: true
      }
      const expectedLoading: UiState = {
        isLoading: false
      }

      const newState = reducer(initialState, hideLoading())

      expect(newState).toStrictEqual(expectedLoading)
    })
  })
})
