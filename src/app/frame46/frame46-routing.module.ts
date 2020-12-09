import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame46Page } from './frame46.page';

const routes: Routes = [
  {
    path: '',
    component: Frame46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame46PageRoutingModule {}
