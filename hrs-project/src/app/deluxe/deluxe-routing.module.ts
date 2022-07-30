import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeluxePage } from './deluxe.page';

const routes: Routes = [
  {
    path: '',
    component: DeluxePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeluxePageRoutingModule {}
