import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioDetallePageRoutingModule } from './servicio-detalle-routing.module';

import { ServicioDetallePage } from './servicio-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioDetallePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ServicioDetallePage]
})
export class ServicioDetallePageModule {}
