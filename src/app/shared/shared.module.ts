import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickAndSpaceDirective } from './directive/click-and-space.directive';
import { RedirectionAnchorDirective } from './directive/redirection-anchor.directive';
import { RedirectionLinkWidgetComponent } from './widget/redirection-link-widget/redirection-link-widget.component';
import { RouterModule } from '@angular/router';
import { SetFocusDirective } from './directive/set-focus.directive';



@NgModule({
  declarations: [
    ClickAndSpaceDirective,
    RedirectionAnchorDirective,
    RedirectionLinkWidgetComponent,
    SetFocusDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ClickAndSpaceDirective,
    RedirectionAnchorDirective,
    RedirectionLinkWidgetComponent,
    SetFocusDirective,
  ]
})
export class SharedModule { }
