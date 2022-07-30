import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrPageRoutingModule } from './fr-routing.module';

import { FrPage } from './fr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrPageRoutingModule
  ],
  declarations: [FrPage]
})
export class FrPageModule {}
