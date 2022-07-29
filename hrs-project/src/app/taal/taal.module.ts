import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaalPageRoutingModule } from './taal-routing.module';

import { TaalPage } from './taal.page';
import { TaalmfComponent } from '../taalmf/taalmf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaalPageRoutingModule
  ],
  declarations: [TaalPage, TaalmfComponent]
})
export class TaalPageModule {}
