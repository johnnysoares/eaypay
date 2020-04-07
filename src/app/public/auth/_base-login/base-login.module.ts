import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseLoginPageRoutingModule } from './base-login-routing.module';

import { BaseLoginPage } from './base-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseLoginPageRoutingModule
  ],
  declarations: [BaseLoginPage]
})
export class BaseLoginPageModule {}
