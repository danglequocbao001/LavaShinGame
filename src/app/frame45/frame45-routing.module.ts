import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame45Page } from './frame45.page';

const routes: Routes = [
  {
    path: '',
    component: Frame45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame45PageRoutingModule {}
