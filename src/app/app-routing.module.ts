import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DetailComponent } from './common/components/detail/detail.component';

export const APP_ROUTES: Routes = [
    { path: ':id', component: DetailComponent, outlet: 'detail'},
    { path: '**', redirectTo: 'timeline', pathMatch: 'full'}
];

/**
 * Main module routing
 */
@NgModule({
  imports: [
      RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
