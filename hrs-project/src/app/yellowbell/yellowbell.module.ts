import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YellowbellPageRoutingModule } from './yellowbell-routing.module';

import { YellowbellPage } from './yellowbell.page';
import { YbscreenComponent } from '../ybscreen/ybscreen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YellowbellPageRoutingModule
  ],
  declarations: [YellowbellPage, YbscreenComponent]
})
export class YellowbellPageModule {}
