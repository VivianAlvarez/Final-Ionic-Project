import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrPageRoutingModule } from './sr-routing.module';

import { SrPage } from './sr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrPageRoutingModule
  ],
  declarations: [SrPage]
})
export class SrPageModule {}
