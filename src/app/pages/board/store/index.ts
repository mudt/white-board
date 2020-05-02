import { environment } from 'src/environments/environment';

import { MetaReducer } from '@ngrx/store';

import * as fromBoard from './board.reducer';

export const metaReducers: MetaReducer<
  fromBoard.State
>[] = !environment.production ? [] : [];
