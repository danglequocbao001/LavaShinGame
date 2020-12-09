import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame43Page } from './frame43.page';

const routes: Routes = [
  {
    path: '',
    component: Frame43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame43PageRoutingModule {}
