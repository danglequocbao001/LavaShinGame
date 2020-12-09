import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame41PageRoutingModule } from './frame41-routing.module';

import { Frame41Page } from './frame41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame41PageRoutingModule
  ],
  declarations: [Frame41Page]
})
export class Frame41PageModule {}
