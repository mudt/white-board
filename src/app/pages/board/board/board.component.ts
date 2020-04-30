import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cards: ICard[] = [];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.cards = this.boardService.fetchCards();
  }

  updateCard(card: ICard) {
    this.cards = this.cards.map((c) => {
      if (c.id === card.id) {
        return card;
      }
      return c;
    });
  }
}
