import { ICard } from 'src/app/models/card';

import { Component, OnInit } from '@angular/core';

import { BoardFacade } from '../store/board.facade';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cards$ = this.boardService.cards$;
  loading$ = this.boardService.loading$;

  constructor(private boardService: BoardFacade) {}

  ngOnInit(): void {
    this.boardService.loadCards();
  }

  updateCard(card: ICard) {
    this.boardService.updateCard(card);
  }

  addCard() {
    this.boardService.createCard();
  }

  deleteCard(id: number) {
    this.boardService.deleteCard(id);
  }
}
