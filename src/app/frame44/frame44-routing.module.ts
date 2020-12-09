import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame44Page } from './frame44.page';

const routes: Routes = [
  {
    path: '',
    component: Frame44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame44PageRoutingModule {}
