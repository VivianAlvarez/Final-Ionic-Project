import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuxePage } from './luxe.page';

const routes: Routes = [
  {
    path: '',
    component: LuxePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuxePageRoutingModule {}
