import { AfterViewInit, Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSetFocus]'
})
export class SetFocusDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

}
