import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPagoPageRoutingModule } from './formulario-pago-routing.module';

import { FormularioPagoPage } from './formulario-pago.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormularioPagoPage]
})
export class FormularioPagoPageModule {}
