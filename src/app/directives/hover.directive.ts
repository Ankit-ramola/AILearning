import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor() {}
  @HostBinding('style.backgroundColor') backgroundColor = '';
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }
}
