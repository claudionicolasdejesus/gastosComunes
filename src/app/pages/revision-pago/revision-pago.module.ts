import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionPagoPageRoutingModule } from './revision-pago-routing.module';

import { RevisionPagoPage } from './revision-pago.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionPagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RevisionPagoPage]
})
export class RevisionPagoPageModule {}
