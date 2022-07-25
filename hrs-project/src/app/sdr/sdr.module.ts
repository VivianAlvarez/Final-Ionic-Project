import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdrPageRoutingModule } from './sdr-routing.module';

import { SdrPage } from './sdr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdrPageRoutingModule
  ],
  declarations: [SdrPage]
})
export class SdrPageModule {}
