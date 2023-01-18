import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: '/redirect-links' },
    {
      path: 'redirect-links',
      loadChildren: () => import('./features/redirection-link/redirection-link.module').then(m => m.RedirectionLinkModule)
    },
    {
      path: 'click-and-space',
      loadChildren: () => import('./features/click-and-space/click-and-space.module').then(m => m.ClickAndSpaceModule)
    },
    {
      path: 'focus-mat-tab',
      loadChildren: () => import('./features/mat-tab-focus/mat-tab-focus.module').then(m => m.MatTabFocusModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

