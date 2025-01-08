import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenciaDetallePageRoutingModule } from './residencia-detalle-routing.module';

import { ResidenciaDetallePage } from './residencia-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidenciaDetallePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResidenciaDetallePage]
})
export class ResidenciaDetallePageModule {}
