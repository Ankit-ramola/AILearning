import { createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export interface AppState {
  count: UserState;
}

export const selectUserState = (state: AppState) => state.count;

export const selectCount = createSelector(
  selectUserState,
  (state: UserState) => state.count
);
export const selectName = createSelector(
  selectUserState,
  (state: UserState) => state.name
);