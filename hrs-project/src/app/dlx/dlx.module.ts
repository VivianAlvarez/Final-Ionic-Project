import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlxPageRoutingModule } from './dlx-routing.module';

import { DlxPage } from './dlx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlxPageRoutingModule
  ],
  declarations: [DlxPage]
})
export class DlxPageModule {}
