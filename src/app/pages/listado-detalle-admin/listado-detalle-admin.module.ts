import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoDetalleAdminPageRoutingModule } from './listado-detalle-admin-routing.module';

import { ListadoDetalleAdminPage } from './listado-detalle-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoDetalleAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoDetalleAdminPage]
})
export class ListadoDetalleAdminPageModule {}
