import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrPageRoutingModule } from './tr-routing.module';

import { TrPage } from './tr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrPageRoutingModule
  ],
  declarations: [TrPage]
})
export class TrPageModule {}
