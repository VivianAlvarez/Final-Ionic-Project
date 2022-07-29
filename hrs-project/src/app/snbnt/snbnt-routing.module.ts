import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnbntPage } from './snbnt.page';

const routes: Routes = [
  {
    path: '',
    component: SnbntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnbntPageRoutingModule {}
