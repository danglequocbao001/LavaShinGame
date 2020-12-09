import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame48Page } from './frame48.page';

const routes: Routes = [
  {
    path: '',
    component: Frame48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame48PageRoutingModule {}
