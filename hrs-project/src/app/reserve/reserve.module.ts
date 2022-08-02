import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservePageRoutingModule } from './reserve-routing.module';

import { ReservePage } from './reserve.page';
import { BookscreenComponent } from '../bookscreen/bookscreen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservePageRoutingModule
  ],
  declarations: [ReservePage, BookscreenComponent]
})
export class ReservePageModule {}
