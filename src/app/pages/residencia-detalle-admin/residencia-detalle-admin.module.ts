import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenciaDetalleAdminPageRoutingModule } from './residencia-detalle-admin-routing.module';

import { ResidenciaDetalleAdminPage } from './residencia-detalle-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidenciaDetalleAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResidenciaDetalleAdminPage]
})
export class ResidenciaDetalleAdminPageModule {}
