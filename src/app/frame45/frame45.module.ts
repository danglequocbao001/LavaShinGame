import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame45PageRoutingModule } from './frame45-routing.module';

import { Frame45Page } from './frame45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame45PageRoutingModule
  ],
  declarations: [Frame45Page]
})
export class Frame45PageModule {}
