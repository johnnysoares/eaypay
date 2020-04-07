import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/_domain/users/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-base-default',
	templateUrl: './base-default.page.html',
	styleUrls: ['./base-default.page.scss'],
})
export class BaseDefaultPage implements OnInit {
	public selectedIndex = 0;
	public appPages = [
		{
			title: 'Home',
			url: '/app-index',
			icon: 'home'
		},
		{
			title: 'Me Ajuda',
			url: '/app-index/help',
			icon: 'help-circle'
		},
		{
			title: 'Perfil',
			url: '/app-index/profile',
			icon: 'person'
		},
		{
			title: 'Configurar Cartão',
			url: '/app-index/card-settings',
			icon: 'card'
		},
		{
			title: 'Configurações do App',
			url: '/app-index/app-settings',
			icon: 'phone-portrait'
			
		}
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work'];

	//Construtor
	public constructor(private _authService: UserAuthService,
					   private _router: Router) { 

	}

	public signOut(){
		this._authService.signOut();
		this.goLoginScreen();
	}

	//Disparar validacoes de login
	private goLoginScreen(): void {

		this._router.navigateByUrl("base-login").then(e => {
			if (e) {
				console.log("Go to login!");
			} else {
				console.log("login has failed!");
			}
		});
	}	
	
	//Iniciar
	public ngOnInit() {
		    console.log("BaseDefaultPage");

		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		}
	}

}
