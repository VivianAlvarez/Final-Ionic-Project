import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsPageRoutingModule } from './es-routing.module';

import { EsPage } from './es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsPageRoutingModule
  ],
  declarations: [EsPage]
})
export class EsPageModule {}
