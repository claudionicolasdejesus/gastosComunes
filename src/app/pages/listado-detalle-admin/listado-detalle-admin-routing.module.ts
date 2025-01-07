import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDetalleAdminPage } from './listado-detalle-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoDetalleAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoDetalleAdminPageRoutingModule {}
