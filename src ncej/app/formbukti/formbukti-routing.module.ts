import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbuktiPage } from './formbukti.page';

const routes: Routes = [
  {
    path: '',
    component: FormbuktiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormbuktiPageRoutingModule {}
