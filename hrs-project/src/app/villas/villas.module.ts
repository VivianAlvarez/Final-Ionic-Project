import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillasPageRoutingModule } from './villas-routing.module';

import { VillasPage } from './villas.page';
import { VillasehComponent } from '../villaseh/villaseh.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillasPageRoutingModule
  ],
  declarations: [VillasPage, VillasehComponent]
})
export class VillasPageModule {}
