import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_domain/users/entities/user';
import { LoginService } from 'src/app/_domain/users/services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	//Private Propertiers
	private router: Router;
		
	//Public Propertiers
	public formLogin: FormGroup;
	public flagSubmitForm: boolean;
	public flagErroLogin: boolean;
	public mensagemErroLogin: string;
	public isLoading:boolean;

	//Construtor
	public constructor(public formBuilder: FormBuilder,
					   private _loginService: LoginService,
					   private _router: Router) { 

		this.router = _router;
	}

	//Method Action
	public iniciarForm = (): void => {

		this.formLogin = this.formBuilder.group({
			nroConta: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
		});
	}	

	//
	public get errorControl() {
		return this.formLogin.controls;
	}	

	//Disparar validacoes de login
	public validarAcesso(): void {

		this.isLoading = true;

		this.flagSubmitForm = true;

		this.flagErroLogin = false;

		if (!this.formLogin.valid) {

			this.isLoading = false;

			return;
		}		

		let formDados = this.formLogin.value;

		let infoUser = new User();
		infoUser.accountNumber = formDados.nroConta;

		let flagSign = this._loginService.login(infoUser);

		if(flagSign){
			this.goHome();
			return;
		}

		this.isLoading = false;
		this.flagErroLogin = true;
		this.mensagemErroLogin = "Número de conta não encontrado.";

	}

	//Disparar validacoes de login
	private goHome(): void {

		this.router.navigateByUrl("app-index").then(e => {
			if (e) {
				console.log("Home is successful!");
			} else {
				console.log("Home has failed!");
			}
		});
	}	

	public ngOnInit() {
		
		this.iniciarForm();
	}

}
