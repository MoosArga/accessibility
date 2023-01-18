import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTabFocusComponent } from './mat-tab-focus.component';

const routes: Routes = [
  { path: '', component: MatTabFocusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTabFocusRoutingModule { }
