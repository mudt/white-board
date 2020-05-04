import { ElementRef } from '@angular/core';

import { ElementResizeDirective } from './element-resize.directive';

describe('ElementResizeDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef('<p>');
    const directive = new ElementResizeDirective(el);
    expect(directive).toBeTruthy();
  });
});
