import { createAction } from "@ngrx/store";

export const showLoading = createAction("[UI] Show Loading");

export const hideLoading = createAction("[UI] Hide Loading");

export const showModalSuccess = createAction("[UI] Show Success Modal");

export const hideModal = createAction("[UI] Hide Modal");
