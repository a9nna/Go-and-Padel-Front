import { type UiState } from "src/app/ui.model"
import { hideLoading, hideModal, showLoading, showModalError, showModalSuccess } from '../actions/ui.actions';
import { reducer } from "./ui.reducers"

describe("Given a uiFeature", () => {
  describe("When it receives an initial state and a showLoading action with a isLoading setted on false", () => {
    const initialState: UiState = {
      isModal:false,
      isLoading: false,
      isError: false
    }
    test("Then it should return the new state with isLoading setted on true", () => {
      const expectedState: UiState = {
        isModal: false,
        isLoading: true,
        isError: false
      }

      const newState = reducer(initialState, showLoading())


      expect(newState).toStrictEqual(expectedState)
    })
  })

  describe("When it receives an initial state and hideLoading action with a isLoading setted on true", () => {
    test("Then it should return the new state with isLoading setted on false", () => {
      const initialState: UiState = {
        isModal: false,
        isLoading: true,
        isError: false
      }
      const expectedState: UiState = {
        isModal: false,
        isLoading: false,
        isError: false
      }

      const newState = reducer(initialState, hideLoading())

      expect(newState).toStrictEqual(expectedState)
    })
  })

  describe("When it receives an initial state with isModal setted on false and showModalSuccess action",() => {
    test("Then it should return the new state with isModal setted on true", () => {
      const initialState: UiState = {
        isModal: false,
        isLoading: false,
        isError: false
      }

      const expectedState: UiState = {
        isModal: true,
        isLoading: false,
        isError: false
      }

      const newState = reducer(initialState,showModalSuccess());

      expect(newState).toStrictEqual(expectedState)
    })
  })

  describe("When it receives an initial state with isModal setted on true and hideModal action", () => {
    test("Then it should return new state with isModal setted on false", () => {
      const initialState: UiState = {
        isModal: true,
        isLoading: false,
        isError: false
      }

      const expectedState: UiState = {
        isModal: false,
        isLoading: false,
        isError: false
      }

      const newState = reducer(initialState, hideModal());

      expect(newState).toStrictEqual(expectedState);
    })
  })

  describe("When it receives an initial state with isModal setted on false and showModalError action", () => {
    test("Then it should return new state with isModall and isError setted on true", () => {
      const initialState: UiState = {
        isModal: false,
        isLoading: false,
        isError: false
      }

      const expectedState: UiState = {
        isModal: true,
        isLoading: false,
        isError: true
      }

      const newState = reducer(initialState, showModalError());

      expect(newState).toStrictEqual(expectedState);
    })
  })
})
