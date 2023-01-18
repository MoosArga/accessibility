import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabFocusRoutingModule } from './mat-tab-focus-routing.module';
import { MatTabFocusComponent } from './mat-tab-focus.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MatTabFocusComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    MatTabFocusRoutingModule
  ]
})
export class MatTabFocusModule { }
