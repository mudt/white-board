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
}
