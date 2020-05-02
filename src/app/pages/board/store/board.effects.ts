import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as BoardActions from './board.actions';

@Injectable()
export class BoardEffects {
  constructor(private actions$: Actions, private boardService: BoardService) {}

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.loadCards),
      switchMap(() =>
        this.boardService.fetchCards().pipe(
          map((cards) => BoardActions.loadCardsSuccess({ cards })),
          catchError((error) => of(BoardActions.loadCardsFailure({ error }))),
        ),
      ),
    ),
  );

  createCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.createCard),
      switchMap(() =>
        this.boardService.createCard().pipe(
          map((card) => BoardActions.createCardSuccess({ card })),
          catchError((error) => of(BoardActions.createCardFailure({ error }))),
        ),
      ),
    ),
  );

  updateCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.updateCard),
      switchMap((data) =>
        this.boardService.updateCard(data.card).pipe(
          map((_) => BoardActions.updateCardSuccess()),
          catchError((error) => of(BoardActions.updateCardFailure({ error }))),
        ),
      ),
    ),
  );
}
