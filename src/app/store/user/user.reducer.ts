import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './user.actions';

export interface UserState {
  count: number;
  name : string;
}
export const initialState: UserState = {
  count: 5,
  name : 'Ankit'
};

export const countReducer = createReducer(
  initialState,
  on(increment, (state) => { 
    return {...state, count: state.count + 1 }}), // either use return or directly return the object
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 5 })),
);
