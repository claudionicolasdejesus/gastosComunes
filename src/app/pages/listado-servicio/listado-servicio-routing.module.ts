import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoServicioPage } from './listado-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoServicioPageRoutingModule {}
