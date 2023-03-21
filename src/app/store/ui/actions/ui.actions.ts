import { createAction } from "@ngrx/store";

export const showLoading = createAction("[UI] Show Loading");

export const hideLoading = createAction("[UI] Hide Loading");

export const showModal = createAction("[UI] Show Modal");
