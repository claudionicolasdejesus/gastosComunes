import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenciaDetallePage } from './residencia-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenciaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenciaDetallePageRoutingModule {}
