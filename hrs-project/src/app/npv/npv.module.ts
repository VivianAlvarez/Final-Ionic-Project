import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NpvPageRoutingModule } from './npv-routing.module';

import { NpvPage } from './npv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NpvPageRoutingModule
  ],
  declarations: [NpvPage]
})
export class NpvPageModule {}
