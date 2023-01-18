import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickAndSpaceComponent } from './click-and-space.component';

const routes: Routes = [
  { path: '', component: ClickAndSpaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickAndSpaceRoutingModule { }
