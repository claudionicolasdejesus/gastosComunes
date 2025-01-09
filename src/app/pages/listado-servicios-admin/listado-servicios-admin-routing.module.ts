import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoServiciosAdminPage } from './listado-servicios-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoServiciosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoServiciosAdminPageRoutingModule {}
