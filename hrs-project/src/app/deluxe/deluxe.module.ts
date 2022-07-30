import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeluxePageRoutingModule } from './deluxe-routing.module';

import { DeluxePage } from './deluxe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeluxePageRoutingModule
  ],
  declarations: [DeluxePage]
})
export class DeluxePageModule {}
