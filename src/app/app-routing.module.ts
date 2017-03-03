import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'timeline', pathMatch: 'full'},
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
