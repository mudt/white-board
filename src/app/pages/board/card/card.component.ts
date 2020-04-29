import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragEnd,
  CdkDragStart,
  CdkDragRelease,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() position = { x: 0, y: 0 };
  @Input() color: string = null;
  @Input() locked: boolean;
  @Input() text: string;

  editMode = false;

  constructor() {}
  // source: import('@angular/cdk/drag-drop').CdkDrag<any>;

  ngOnInit(): void {}

  startEdit() {
    this.editMode = true;
  }

  saveText() {
    this.editMode = false;
  }

  setText() {}

  dragEnd(ev: CdkDragEnd) {
    const position = ev.source.getFreeDragPosition();
    this.position.x = position.x;
    this.position.y = position.y;
  }
}
