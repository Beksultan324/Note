import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {
  counter = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.counter++;
    console.log(this.counter);
  }

}
