import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YellowbellPage } from './yellowbell.page';

const routes: Routes = [
  {
    path: '',
    component: YellowbellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YellowbellPageRoutingModule {}
