import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame41Page } from './frame41.page';

const routes: Routes = [
  {
    path: '',
    component: Frame41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame41PageRoutingModule {}
