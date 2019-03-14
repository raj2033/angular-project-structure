import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MyActionTypes } from '../actions/myactions.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { MyserviceService } from 'src/app/services/myservice.service';
import * as fromActions from '../actions/myactions.actions';


@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private myService: MyserviceService
  ) {}

  @Effect() // Effect() declaration is must, without this, myAction$ cannot listen to any dispatched actions
  myAction$ = this.actions$.pipe(
    ofType<fromActions.GetItems>(MyActionTypes.GET_ITEMS),
    switchMap(action => {
      return this.myService.getItems().pipe(
        map(data => new fromActions.GetItemsSuccess(data)),
        catchError(err => of(new fromActions.GetItemsSuccess(err)))
      );
    })
  );
}
