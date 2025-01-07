import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoResidenciaAdminPageRoutingModule } from './listado-residencia-admin-routing.module';

import { ListadoResidenciaAdminPage } from './listado-residencia-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoResidenciaAdminPageRoutingModule
  ],
  declarations: [ListadoResidenciaAdminPage]
})
export class ListadoResidenciaAdminPageModule {}
