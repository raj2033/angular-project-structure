import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { MyReducerState } from './my-reducer.reducer';
import * as fromMyReducer from './my-reducer.reducer';

export interface State {
  todos: MyReducerState
}

export const reducers: ActionReducerMap<State> = {
  todos: fromMyReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
