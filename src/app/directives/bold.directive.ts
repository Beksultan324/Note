import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  private fontWeight = 'normal';
  private fontColor = '';

  @Input() selectedColor = '';
  @Input() isUpper: boolean;

  // constructor(private element: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  // }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight; // el.style.fontWeight = this.fontWeight
  }

  @HostBinding('style.color') get getFontColor() {
    return this.fontColor;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'crosshair'; // el.style.cursor = 'pointer'
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.setFontWeight('bold');
    this.fontWeight = 'bold';
    this.fontColor = this.selectedColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.setFontWeight('normal');
    this.fontWeight = 'normal';
    this.fontColor = '';
  }

  // setFontWeight(val): void {
  //   this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  // }
}
