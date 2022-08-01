import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontePageRoutingModule } from './ponte-routing.module';

import { PontePage } from './ponte.page';
import { PontefinoComponent } from '../pontefino/pontefino.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontePageRoutingModule
  ],
  declarations: [PontePage, PontefinoComponent]
})
export class PontePageModule {}
