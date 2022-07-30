import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LipaPageRoutingModule } from './lipa-routing.module';

import { LipaPage } from './lipa.page';
import { LipahComponent } from '../lipah/lipah.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LipaPageRoutingModule
  ],
  declarations: [LipaPage, LipahComponent]
})
export class LipaPageModule {}
