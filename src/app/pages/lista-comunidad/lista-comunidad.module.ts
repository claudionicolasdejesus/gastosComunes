import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComunidadPageRoutingModule } from './lista-comunidad-routing.module';

import { ListaComunidadPage } from './lista-comunidad.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComunidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaComunidadPage]
})
export class ListaComunidadPageModule {}
