import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  declarations: [],
  imports: [
    DragDropModule,
    TextFieldModule
  ],
  exports: [
    DragDropModule
  ]
})
export class MaterialModule { }
