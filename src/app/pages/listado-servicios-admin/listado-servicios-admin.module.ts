import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoServiciosAdminPageRoutingModule } from './listado-servicios-admin-routing.module';

import { ListadoServiciosAdminPage } from './listado-servicios-admin.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoServiciosAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoServiciosAdminPage]
})
export class ListadoServiciosAdminPageModule {}
