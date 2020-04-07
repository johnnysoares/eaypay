import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'base-login',
    pathMatch: 'full'
  },
  {
    path: 'app-index',
    loadChildren: () => import('./public/_templates-base/base-default/base-default.module').then( m => m.BaseDefaultPageModule)
  },
  {
    path: 'base-login',
    loadChildren: () => import('./public/auth/_base-login/base-login.module').then( m => m.BaseLoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./public/home/index/index.module').then( m => m.IndexPageModule)
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
