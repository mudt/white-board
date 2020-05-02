import { ICard } from 'src/app/models/card';

import { createAction, props } from '@ngrx/store';

export const loadCards = createAction('[Board Page] Load Boards');

export const loadCardsSuccess = createAction(
  '[Board Page] Load Boards Success',
  props<{ cards: ICard[] }>(),
);

export const loadCardsFailure = createAction(
  '[Board Page] Load Boards Failure',
  props<{ error: any }>(),
);

export const createCard = createAction('[Board Page] Create Card');

export const createCardSuccess = createAction(
  '[Board Page] Create Card Success',
  props<{ card: ICard }>(),
);

export const createCardFailure = createAction(
  '[Board Page] Create Card Failure',
  props<{ error: any }>(),
);

export const updateCard = createAction(
  '[Board Page] Update Card',
  props<{ card: ICard }>(),
);

export const updateCardSuccess = createAction(
  '[Board Page] Update Card Success',
);

export const updateCardFailure = createAction(
  '[Board Page] Update Card Failure',
  props<{ error: any }>(),
);
