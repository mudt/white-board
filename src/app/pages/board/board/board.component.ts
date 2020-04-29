import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cardPotions = {
    x: 0,
    y: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  drop(e) {
    console.log('drop', e);
    this.cardPotions.x = e.clientX;
    this.cardPotions.y = e.clientY;
  }

  dragOver(e) {
    console.log('dragover', e);
    e.preventDefault();
  }
}
