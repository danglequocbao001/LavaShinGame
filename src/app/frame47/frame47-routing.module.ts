import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame47Page } from './frame47.page';

const routes: Routes = [
  {
    path: '',
    component: Frame47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame47PageRoutingModule {}
