import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickAndSpaceRoutingModule } from './click-and-space-routing.module';
import { ClickAndSpaceComponent } from './click-and-space.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ClickAndSpaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClickAndSpaceRoutingModule
  ]
})
export class ClickAndSpaceModule { }
