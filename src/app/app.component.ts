import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import * as fromAction from './store/actions/myactions.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-test';

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromAction.GetItems());
  }
}
