import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoResidenciaPageRoutingModule } from './listado-residencia-routing.module';

import { ListadoResidenciaPage } from './listado-residencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoResidenciaPageRoutingModule
  ],
  declarations: [ListadoResidenciaPage]
})
export class ListadoResidenciaPageModule {}
