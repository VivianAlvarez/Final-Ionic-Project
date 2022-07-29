import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillasPage } from './villas.page';

const routes: Routes = [
  {
    path: '',
    component: VillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillasPageRoutingModule {}
