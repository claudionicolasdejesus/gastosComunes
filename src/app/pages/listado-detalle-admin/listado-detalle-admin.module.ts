import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoDetalleAdminPageRoutingModule } from './listado-detalle-admin-routing.module';

import { ListadoDetalleAdminPage } from './listado-detalle-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoDetalleAdminPageRoutingModule
  ],
  declarations: [ListadoDetalleAdminPage]
})
export class ListadoDetalleAdminPageModule {}
