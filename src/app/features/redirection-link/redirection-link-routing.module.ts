import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectionLinkComponent } from './redirection-link.component';

const routes: Routes = [
  { path: '', component: RedirectionLinkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectionLinkRoutingModule { }
