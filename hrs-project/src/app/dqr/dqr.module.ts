import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DqrPageRoutingModule } from './dqr-routing.module';

import { DqrPage } from './dqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DqrPageRoutingModule
  ],
  declarations: [DqrPage]
})
export class DqrPageModule {}
