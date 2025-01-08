import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoResidenciaPageRoutingModule } from './listado-residencia-routing.module';

import { ListadoResidenciaPage } from './listado-residencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoResidenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoResidenciaPage]
})
export class ListadoResidenciaPageModule {}
