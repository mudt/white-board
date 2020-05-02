import { createFeatureSelector, createSelector } from '@ngrx/store';

import { boardFeatureKey, State } from './board.reducer';

const selectFeature = createFeatureSelector<State>(boardFeatureKey);

export const selectLoading = createSelector(
  selectFeature,
  (state) => state.loading,
);

export const selectCards = createSelector(
  selectFeature,
  (state) => state.cards,
);
