import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioDetalleAdminPage } from './servicio-detalle-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioDetalleAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioDetalleAdminPageRoutingModule {}
