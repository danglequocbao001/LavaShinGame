import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame43PageRoutingModule } from './frame43-routing.module';

import { Frame43Page } from './frame43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame43PageRoutingModule
  ],
  declarations: [Frame43Page]
})
export class Frame43PageModule {}
