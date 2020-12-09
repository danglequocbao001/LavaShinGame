import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame47PageRoutingModule } from './frame47-routing.module';

import { Frame47Page } from './frame47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame47PageRoutingModule
  ],
  declarations: [Frame47Page]
})
export class Frame47PageModule {}
