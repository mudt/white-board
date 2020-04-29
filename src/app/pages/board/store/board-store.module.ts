import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromState from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, {
      metaReducers: fromState.metaReducers,
    }),
  ],
})
export class BoardStoreModule {}
