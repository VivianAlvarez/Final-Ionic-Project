import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdrPage } from './ddr.page';

const routes: Routes = [
  {
    path: '',
    component: DdrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdrPageRoutingModule {}
