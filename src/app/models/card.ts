export interface ICard {
  id: number;
  text: string;
  position: {
    x: number;
    y: number;
  };
  color: string;
  lock: boolean;
}
