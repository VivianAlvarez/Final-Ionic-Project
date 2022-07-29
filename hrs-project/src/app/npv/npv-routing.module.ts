import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpvPage } from './npv.page';

const routes: Routes = [
  {
    path: '',
    component: NpvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpvPageRoutingModule {}
