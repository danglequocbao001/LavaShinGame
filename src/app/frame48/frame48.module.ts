import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame48PageRoutingModule } from './frame48-routing.module';

import { Frame48Page } from './frame48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame48PageRoutingModule
  ],
  declarations: [Frame48Page]
})
export class Frame48PageModule {}
