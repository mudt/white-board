import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  editMode = false;
  cardText = 'Input Text';

  constructor() {}

  ngOnInit(): void {}

  startEdit() {
    this.editMode = true;
  }

  saveText() {
    this.editMode = false;
  }

  setText() {}
}
