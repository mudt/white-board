import { ElementSize } from './element-size';

export class ElementResize implements ElementSize {
  constructor(public width: number, public height: number) {}
}
