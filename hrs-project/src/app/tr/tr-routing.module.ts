import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrPage } from './tr.page';

const routes: Routes = [
  {
    path: '',
    component: TrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrPageRoutingModule {}
