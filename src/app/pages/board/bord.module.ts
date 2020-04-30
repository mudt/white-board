import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BoardRoutingRoutingModule } from './board-routing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFontAwasomeModule } from 'src/app/shared/icon-font-awasome/icon-font-awasome.module';

@NgModule({
  declarations: [BoardComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BoardRoutingRoutingModule,
    IconFontAwasomeModule,
  ],
})
export class BordModule {}
