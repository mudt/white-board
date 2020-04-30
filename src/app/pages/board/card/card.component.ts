import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ICard } from 'src/app/models/card';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardId: number;
  @Input() position = { x: 0, y: 0 };
  @Input() color: string = null;
  @Input() locked: boolean;
  @Input() text: string;

  @Output() saveCard = new EventEmitter<ICard>();

  card: ICard | null = null;

  editMode = false;

  cardForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.card = {
      id: this.cardId,
      text: this.text,
      position: this.position,
      color: this.color,
      lock: this.locked,
    };

    this.cardForm = new FormGroup({
      text: new FormControl(this.card.text, Validators.required),
    });
  }

  startEdit() {
    this.editMode = true;
  }

  saveText() {
    this.card = { ...this.card, ...this.cardForm.value };
    this.editMode = false;
    this.saveCard.emit(this.card);
  }

  dragEnd(ev: CdkDragEnd) {
    const position = ev.source.getFreeDragPosition();
    this.card = { ...this.card, position: { ...position } };
    this.saveCard.emit(this.card);
  }

  get cardText() {
    return this.cardForm.get('text');
  }
}
