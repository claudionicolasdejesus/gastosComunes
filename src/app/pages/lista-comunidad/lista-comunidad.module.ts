import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComunidadPageRoutingModule } from './lista-comunidad-routing.module';

import { ListaComunidadPage } from './lista-comunidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComunidadPageRoutingModule
  ],
  declarations: [ListaComunidadPage]
})
export class ListaComunidadPageModule {}
