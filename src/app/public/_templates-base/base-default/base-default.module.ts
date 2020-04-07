import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseDefaultPageRoutingModule } from './base-default-routing.module';

import { BaseDefaultPage } from './base-default.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseDefaultPageRoutingModule
  ],
  declarations: [BaseDefaultPage]
})
export class BaseDefaultPageModule {}
