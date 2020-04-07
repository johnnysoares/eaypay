import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseDefaultPage } from './base-default.page';

const routes: Routes = [
	{
		path: '',
		component: BaseDefaultPage,
		children:[
			{
				path: '',
				loadChildren: () => import('../../home/index/index.module').then( m => m.IndexPageModule),
				pathMatch: 'full'
			},
			{
				path: 'app-index',
				loadChildren: () => import('../../home/index/index.module').then( m => m.IndexPageModule),
				pathMatch: 'full'

			},
			{
				path: 'card-settings',
				loadChildren: () => import('../../card-settings/card-settings.module').then( m => m.CardSettingsPageModule)
			  },
			  {
				path: 'app-settings',
				loadChildren: () => import('../../app-settings/app-settings.module').then( m => m.AppSettingsPageModule)
			  },
			  {
				path: 'help',
				loadChildren: () => import('../../help/help.module').then( m => m.HelpPageModule),
			  }			
		]    
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BaseDefaultPageRoutingModule {}
