import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAppStore from './index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAppStore.appStoreFeatureKey, fromAppStore.reducers, { metaReducers: fromAppStore.metaReducers })
  ]
})
export class AppStoreModule { }
