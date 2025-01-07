import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoResidenciaAdminPage } from './listado-residencia-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoResidenciaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoResidenciaAdminPageRoutingModule {}
