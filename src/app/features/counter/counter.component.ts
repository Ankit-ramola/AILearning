import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCount } from '../../store/user/user.selectors';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/user/user.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count :Observable<number>;
  constructor(private store : Store<AppState>) {
    this.count = this.store.select(selectCount);   // return the count from the store as an observable
   }
  onIncrement() {
    console.log("increment");
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  } 
  onReset() {
    this.store.dispatch(reset());
  }
}
