import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromBoard from './';
import { BoardEffects } from './board.effects';
import { boardFeatureKey, reducer } from './board.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(boardFeatureKey, reducer, {
      metaReducers: fromBoard.metaReducers,
    }),
    EffectsModule.forFeature([BoardEffects]),
  ],
})
export class BoardStoreModule {}
