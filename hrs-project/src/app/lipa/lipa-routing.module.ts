import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LipaPage } from './lipa.page';

const routes: Routes = [
  {
    path: '',
    component: LipaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LipaPageRoutingModule {}
