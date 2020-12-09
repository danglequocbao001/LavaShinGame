import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'frame41',
    loadChildren: () => import('./frame41/frame41.module').then( m => m.Frame41PageModule)
  },
  {
    path: 'frame42',
    loadChildren: () => import('./frame42/frame42.module').then( m => m.Frame42PageModule)
  },
  {
    path: 'frame46',
    loadChildren: () => import('./frame46/frame46.module').then( m => m.Frame46PageModule)
  },
  {
    path: 'frame43',
    loadChildren: () => import('./frame43/frame43.module').then( m => m.Frame43PageModule)
  },
  {
    path: 'frame44',
    loadChildren: () => import('./frame44/frame44.module').then( m => m.Frame44PageModule)
  },
  {
    path: 'frame45',
    loadChildren: () => import('./frame45/frame45.module').then( m => m.Frame45PageModule)
  },
  {
    path: 'frame47',
    loadChildren: () => import('./frame47/frame47.module').then( m => m.Frame47PageModule)
  },
  {
    path: 'frame48',
    loadChildren: () => import('./frame48/frame48.module').then( m => m.Frame48PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
