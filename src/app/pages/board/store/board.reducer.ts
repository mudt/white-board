import { ICard } from 'src/app/models/card';

import { Action, createReducer, on } from '@ngrx/store';

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

const boardReducer = createReducer(
  initialState,
  on(BoardActions.loadCards, (state) => ({ ...state, loading: true })),
  on(BoardActions.loadCardsSuccess, (state, { cards }) => ({
    ...state,
    loading: false,
    cards: [...state.cards, ...cards],
  })),
  on(BoardActions.loadCardsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BoardActions.createCard, (state) => ({ ...state, loading: true })),
  on(BoardActions.createCardSuccess, (state, { card }) => ({
    loading: false,
    cards: [...state.cards, card],
  })),
  on(BoardActions.createCardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BoardActions.updateCard, (state) => ({
    ...state,
    loading: true,
  })),
  on(BoardActions.updateCardSuccess, (state, { card }) => ({
    ...state,
    loading: false,
    cards: state.cards.map((c: ICard) => (c.id === card.id ? card : c)),
  })),
  on(BoardActions.updateCardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BoardActions.deleteCard, (state) => ({
    ...state,
    loading: true,
  })),
  on(BoardActions.deleteCardSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    cards: state.cards.filter((card) => card.id !== id),
  })),
  on(BoardActions.deleteCardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return boardReducer(state, action);
}
