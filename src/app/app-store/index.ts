import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const appStoreFeatureKey = 'appStore';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export function logger(
  reducer: ActionReducer<AppState>,
): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', result);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
