import { ResizeSensor } from 'css-element-queries';

import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { ElementResize } from './element-resize';
import { ElementSize } from './element-size';

@Directive({
  selector: '[appElementResize]',
})
export class ElementResizeDirective implements OnInit, OnDestroy {
  private resizeSensor!: ResizeSensor;
  private oldWidth = 0;
  private oldHeight = 0;

  @Input() appElementResize!: ElementSize;
  @Output() resizeEnded = new EventEmitter<ElementResize>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.oldWidth = this.appElementResize.width;
    this.oldHeight = this.appElementResize.height;
    if (ResizeSensor) {
      this.resizeSensor = new ResizeSensor(this.el.nativeElement, () =>
        this.onResize(),
      );
    }
  }

  ngOnDestroy() {
    if (this.resizeSensor) {
      this.resizeSensor.detach();
    }
  }

  onResize() {
    return;
  }

  @HostListener('mouseup') onMouseUp() {
    const width = this.el.nativeElement.clientWidth;
    const height = this.el.nativeElement.clientHeight;

    if (width === this.oldWidth && height === this.oldHeight) {
      return;
    }

    this.oldWidth = width;
    this.oldHeight = height;

    const elResize = new ElementResize(width, height);
    this.resizeEnded.emit(elResize);
  }
}
