import { Action } from '@ngrx/store';

export enum MyActionTypes {
  GET_ITEMS = '[ACTION] MY ACTION',
  GET_ITEMS_SUCCESS = '[ACTION] MY ACTION SUCCESS',
  GET_ITEMS_FAILURE = '[ACTION] MY ACTION FAILURE',
}

export class GetItems implements Action {
  readonly type = MyActionTypes.GET_ITEMS;
}
export class GetItemsFailure implements Action {
  readonly type = MyActionTypes.GET_ITEMS_FAILURE;
  constructor(public payload) {}
}
export class GetItemsSuccess implements Action {
  readonly type = MyActionTypes.GET_ITEMS_SUCCESS;
  constructor(public payload) {}
}

export type MyActions = GetItems | GetItemsSuccess | GetItemsFailure;
