import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    BoardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ]
})
export class BordModule { }
