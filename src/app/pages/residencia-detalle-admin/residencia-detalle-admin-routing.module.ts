import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenciaDetalleAdminPage } from './residencia-detalle-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenciaDetalleAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenciaDetalleAdminPageRoutingModule {}
