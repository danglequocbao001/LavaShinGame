import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame44PageRoutingModule } from './frame44-routing.module';

import { Frame44Page } from './frame44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame44PageRoutingModule
  ],
  declarations: [Frame44Page]
})
export class Frame44PageModule {}
