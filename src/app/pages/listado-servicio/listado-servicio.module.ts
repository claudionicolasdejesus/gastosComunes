import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoServicioPageRoutingModule } from './listado-servicio-routing.module';

import { ListadoServicioPage } from './listado-servicio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoServicioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoServicioPage]
})
export class ListadoServicioPageModule {}
