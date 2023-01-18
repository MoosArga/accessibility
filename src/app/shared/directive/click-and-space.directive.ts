import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickAndSpace]'
})
export class ClickAndSpaceDirective {

  @Output() appClickAndSpace: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: Event):void {
    this.appClickAndSpace.emit();
  }

  @HostListener('keydown.space', ['$event'])
  onKeyDownSpace(event: Event):void {
    event.preventDefault();
    event.stopPropagation();
    this.appClickAndSpace.emit();
  }

}
