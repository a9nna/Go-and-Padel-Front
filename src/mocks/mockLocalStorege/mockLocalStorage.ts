import { type Store } from "../../types";

export const localStorageMock = (function () {
  let store: Store = {
    key: ""
  };

  return {
    getItem(key: string | number) {
      return store[key];
    },

    setItem(key: string | number, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
