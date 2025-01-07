import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoResidenciaPage } from './listado-residencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoResidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoResidenciaPageRoutingModule {}
