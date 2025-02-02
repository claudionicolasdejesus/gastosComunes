import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioDetalleAdminPageRoutingModule } from './servicio-detalle-admin-routing.module';

import { ServicioDetalleAdminPage } from './servicio-detalle-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioDetalleAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ServicioDetalleAdminPage]
})
export class ServicioDetalleAdminPageModule {}
