import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DqrPage } from './dqr.page';

const routes: Routes = [
  {
    path: '',
    component: DqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DqrPageRoutingModule {}
