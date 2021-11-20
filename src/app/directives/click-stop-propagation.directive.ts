import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click', ["$event"]) onClick(event) {
    // this.element.nativeElement.stopPropagation();
    event.stopImmediatePropagation();
    // console.dir(event);
  }
}
