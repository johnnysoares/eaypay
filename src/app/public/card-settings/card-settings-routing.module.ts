import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSettingsPage } from './card-settings.page';

const routes: Routes = [
  {
    path: '',
    component: CardSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSettingsPageRoutingModule {}
