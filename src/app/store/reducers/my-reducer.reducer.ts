import { Action } from '@ngrx/store';
import { MyActionTypes, MyActions } from '../actions/myactions.actions';


export interface MyReducerState {
  todos: any;
}

export const initialState: MyReducerState = {
  todos: []
};

export function reducer(state = initialState, action: MyActions): MyReducerState {
  switch (action.type) {
    case MyActionTypes.GET_ITEMS_SUCCESS: {
      console.log('in reducer, got list of todos form ngrx/effects, adding them to state', action.payload);
      return {
        ...state,
        todos: action.payload
      };
    }
    default:
      return state;
  }
}
