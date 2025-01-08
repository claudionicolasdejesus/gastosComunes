import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdminPageRoutingModule } from './login-admin-routing.module';

import { LoginAdminPage } from './login-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginAdminPage]
})
export class LoginAdminPageModule {}
