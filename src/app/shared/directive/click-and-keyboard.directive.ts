import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickAndKeyboard]'
})
export class ClickAndKeyboardDirective {

  @Output() appClickAndKeyboard: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: Event):void {
    this.appClickAndKeyboard.emit();
  }

  @HostListener('keydown.space', ['$event'])
  @HostListener('keydown.enter', ['$event'])
  onKeyDownSpaceOrEnter(event: Event):void {
    event.preventDefault();
    event.stopPropagation();
    this.appClickAndKeyboard.emit();
  }

}
