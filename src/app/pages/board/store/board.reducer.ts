import { Action, createReducer, on } from '@ngrx/store';
import { ICard } from 'src/app/models/card';

import * as BoardActions from './board.actions';

export const boardFeatureKey = 'board';

export interface State {
  loading: boolean;
  cards: ICard[];
}

export const initialState: State = {
  loading: false,
  cards: [],
};

export const reducer = createReducer(
  initialState,
  on(BoardActions.loadBoards, (state) => ({ loading: true })),
  on(BoardActions.loadBoardsSuccess, (state, payload) => ({
    loading: false,
    cards: payload.cards,
  })),
  on(BoardActions.loadBoardsFailure, (state) => ({ ...state, loading: false })),
);
