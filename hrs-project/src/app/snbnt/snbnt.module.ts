import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnbntPageRoutingModule } from './snbnt-routing.module';

import { SnbntPage } from './snbnt.page';
import { SanbenitoComponent } from '../sanbenito/sanbenito.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnbntPageRoutingModule
  ],
  declarations: [SnbntPage, SanbenitoComponent]
})
export class SnbntPageModule {}
