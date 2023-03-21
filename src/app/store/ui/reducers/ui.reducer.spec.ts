import { type UiState } from "src/app/ui.model"
import { hideLoading, showLoading, showModal } from '../actions/ui.actions';
import { reducer } from "./ui.reducers"

describe("Given a uiFeature", () => {
  describe("When it receives an initial state and a showLoading action with a isLoading setted on false", () => {
    test("Then it should return the new state with isLoading setted on true", () => {
      const initialState: UiState = {
        isModal:false,
        isLoading: false
      }
      const expectedState: UiState = {
        isModal: false,
        isLoading: true
      }

      const newState = reducer(initialState, showLoading())


      expect(newState).toStrictEqual(expectedState)
    })
  })

  describe("When it receives an initial state and hideLoading action with a isLoading setted on true", () => {
    test("Then it should return the new state with isLoading setted on false", () => {
      const initialState: UiState = {
        isModal: false,
        isLoading: true
      }
      const expectedState: UiState = {
        isModal: false,
        isLoading: false
      }

      const newState = reducer(initialState, hideLoading())

      expect(newState).toStrictEqual(expectedState)
    })
  })

  describe("When it receives an initial state with isModal setted on false and showModal action",() => {
    test("Then it should return the new state with isModal setted on true", () => {
      const initialState: UiState = {
        isModal: false,
        isLoading: false,
      }

      const expectedState: UiState = {
        isModal: true,
        isLoading: false
      }

      const newState = reducer(initialState,showModal());

      expect(newState).toStrictEqual(expectedState)
    })
  })
})
