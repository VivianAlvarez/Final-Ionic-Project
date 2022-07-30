import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BsdPageRoutingModule } from './bsd-routing.module';

import { BsdPage } from './bsd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsdPageRoutingModule
  ],
  declarations: [BsdPage]
})
export class BsdPageModule {}
