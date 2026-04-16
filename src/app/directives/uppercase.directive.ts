import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el : ElementRef) { }
 @HostListener('input',['$event']) onInput( event:any){
  const transformed = event.target.value.toUpperCase();
    this.el.nativeElement.value = transformed;
  
 }
}
