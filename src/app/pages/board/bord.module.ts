import { ColorPickerModule } from 'ngx-color-picker';
import { IconFontAwasomeModule } from 'src/app/shared/icon-font-awasome/icon-font-awasome.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BoardRoutingRoutingModule } from './board-routing-routing.module';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { BoardStoreModule } from './store/board-store.module';

@NgModule({
  declarations: [BoardComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BoardRoutingRoutingModule,
    IconFontAwasomeModule,
    BoardStoreModule,
    ColorPickerModule,
  ],
})
export class BordModule {}
