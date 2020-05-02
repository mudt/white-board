import { ICard } from 'src/app/models/card';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { BoardStoreModule } from './board-store.module';
import * as BoardActions from './board.actions';
import { State } from './board.reducer';
import * as BoardSelectors from './board.selectors';

@Injectable({
  providedIn: BoardStoreModule,
})
export class BoardFacade {
  constructor(private store: Store<State>) {}

  loading$ = this.store.pipe(select(BoardSelectors.selectLoading));
  cards$ = this.store.pipe(select(BoardSelectors.selectCards));

  loadCards() {
    this.store.dispatch(BoardActions.loadCards());
  }

  createCard() {
    this.store.dispatch(BoardActions.createCard());
  }

  updateCard(card: ICard) {
    this.store.dispatch(BoardActions.updateCard({ card }));
  }
}
