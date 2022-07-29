import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlxPage } from './dlx.page';

const routes: Routes = [
  {
    path: '',
    component: DlxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlxPageRoutingModule {}
