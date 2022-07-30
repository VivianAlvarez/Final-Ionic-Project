import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelPageRoutingModule } from './del-routing.module';

import { DelPage } from './del.page';
import { DelfaComponent } from '../delfa/delfa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelPageRoutingModule
  ],
  declarations: [DelPage, DelfaComponent]
})
export class DelPageModule {}
