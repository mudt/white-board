import * as fromBoard from './board.actions';

describe('loadBoards', () => {
  it('should return an action', () => {
    expect(fromBoard.loadCards().type).toBe('[Board] Load Boards');
  });
});
