import { ICard } from 'src/app/models/card';

import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardId!: number;
  @Input() position = { x: 0, y: 0 };
  @Input() color = 'white';
  @Input() locked = false;
  @Input() text = '';

  @Output() saveCard = new EventEmitter<ICard>();
  @Output() deleteCard = new EventEmitter<number>();

  card!: ICard;

  editMode = false;

  cardForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.card = {
      id: this.cardId,
      text: this.text,
      position: this.position,
      color: this.color,
      lock: this.locked,
    };

    this.cardForm.addControl(
      'text',
      new FormControl(this.card.text, [
        Validators.required,
        Validators.maxLength(500),
      ]),
    );
  }

  startEdit() {
    this.editMode = true;
  }

  saveText() {
    const value = this.cardForm.get('text')?.value;
    if (value === '') {
      return false;
    }
    this.card = { ...this.card, ...this.cardForm.value };
    this.editMode = false;
    this.saveCard.emit(this.card);
  }

  dragEnd(ev: CdkDragEnd) {
    const position = ev.source.getFreeDragPosition();
    this.card = { ...this.card, position: { ...position } };
    this.saveCard.emit(this.card);
  }

  delete(id: number) {
    if (window.confirm('削除してもよろしいですか？')) {
      this.deleteCard.emit(id);
    }
  }

  get cardText() {
    const ctrl = this.cardForm.get('text');
    if (ctrl === null) {
      throw new Error('Not found form control!');
    }
    return ctrl;
  }
}
