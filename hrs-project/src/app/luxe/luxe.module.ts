import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuxePageRoutingModule } from './luxe-routing.module';

import { LuxePage } from './luxe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuxePageRoutingModule
  ],
  declarations: [LuxePage]
})
export class LuxePageModule {}
