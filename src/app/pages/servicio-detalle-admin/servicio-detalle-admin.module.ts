import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioDetalleAdminPageRoutingModule } from './servicio-detalle-admin-routing.module';

import { ServicioDetalleAdminPage } from './servicio-detalle-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioDetalleAdminPageRoutingModule
  ],
  declarations: [ServicioDetalleAdminPage]
})
export class ServicioDetalleAdminPageModule {}
