import { createAction, props } from "@ngrx/store";
import { type Match } from "src/app/match.model";

export const loadMatch = createAction(
  '[Match] Load Match',
  props<{ match: Match }>()
);
