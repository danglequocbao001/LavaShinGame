import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame46PageRoutingModule } from './frame46-routing.module';

import { Frame46Page } from './frame46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame46PageRoutingModule
  ],
  declarations: [Frame46Page]
})
export class Frame46PageModule {}
