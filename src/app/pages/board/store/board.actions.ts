import { createAction, props } from '@ngrx/store';
import { ICard } from 'src/app/models/card';

export const loadBoards = createAction('[Board Page] Load Boards');

export const loadBoardsSuccess = createAction(
  '[Board Page] Load Boards Success',
  props<{ cards: ICard[] }>(),
);

export const loadBoardsFailure = createAction(
  '[Board Page] Load Boards Failure',
  props<{ error: any }>(),
);
