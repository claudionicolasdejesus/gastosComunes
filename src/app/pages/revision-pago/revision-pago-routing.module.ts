import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionPagoPage } from './revision-pago.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionPagoPageRoutingModule {}
