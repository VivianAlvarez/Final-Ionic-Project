import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontePage } from './ponte.page';

const routes: Routes = [
  {
    path: '',
    component: PontePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontePageRoutingModule {}
