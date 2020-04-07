import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSettingsPageRoutingModule } from './card-settings-routing.module';

import { CardSettingsPage } from './card-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSettingsPageRoutingModule
  ],
  declarations: [CardSettingsPage]
})
export class CardSettingsPageModule {}
