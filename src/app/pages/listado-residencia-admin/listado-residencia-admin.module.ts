import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoResidenciaAdminPageRoutingModule } from './listado-residencia-admin-routing.module';

import { ListadoResidenciaAdminPage } from './listado-residencia-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoResidenciaAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoResidenciaAdminPage]
})
export class ListadoResidenciaAdminPageModule {}
