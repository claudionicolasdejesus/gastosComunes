import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPagosPageRoutingModule } from './historial-pagos-routing.module';

import { HistorialPagosPage } from './historial-pagos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPagosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HistorialPagosPage]
})
export class HistorialPagosPageModule {}
