export interface ICard {
  id: number;
  text: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  color: string;
  lock: boolean;
}
