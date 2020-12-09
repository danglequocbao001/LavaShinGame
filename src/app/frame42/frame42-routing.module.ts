import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame42Page } from './frame42.page';

const routes: Routes = [
  {
    path: '',
    component: Frame42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame42PageRoutingModule {}
