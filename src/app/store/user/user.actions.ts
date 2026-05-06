import { createAction } from "@ngrx/store";


export const increment = createAction('[Increment] Increment');

export const decrement = createAction('[decrement] decrement');

export const reset = createAction('[reset] reset');