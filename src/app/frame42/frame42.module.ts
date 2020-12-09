import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame42PageRoutingModule } from './frame42-routing.module';

import { Frame42Page } from './frame42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame42PageRoutingModule
  ],
  declarations: [Frame42Page]
})
export class Frame42PageModule {}
