import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  DragDropModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
