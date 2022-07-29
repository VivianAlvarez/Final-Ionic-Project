import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrPage } from './sr.page';

const routes: Routes = [
  {
    path: '',
    component: SrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrPageRoutingModule {}
