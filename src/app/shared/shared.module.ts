import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickAndKeyboardDirective } from './directive/click-and-keyboard.directive';
import { RedirectionAnchorDirective } from './directive/redirection-anchor.directive';
import { RedirectionLinkWidgetComponent } from './widget/redirection-link-widget/redirection-link-widget.component';
import { RouterModule } from '@angular/router';
import { SetFocusDirective } from './directive/set-focus.directive';



@NgModule({
  declarations: [
    ClickAndKeyboardDirective,
    RedirectionAnchorDirective,
    RedirectionLinkWidgetComponent,
    SetFocusDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ClickAndKeyboardDirective,
    RedirectionAnchorDirective,
    RedirectionLinkWidgetComponent,
    SetFocusDirective,
  ]
})
export class SharedModule { }
