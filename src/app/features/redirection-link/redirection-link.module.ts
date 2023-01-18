import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectionLinkRoutingModule } from './redirection-link-routing.module';
import { RedirectionLinkComponent } from './redirection-link.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RedirectionLinkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RedirectionLinkRoutingModule
  ]
})
export class RedirectionLinkModule { }
