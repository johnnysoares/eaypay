import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { User } from '../entities/user';
import { UserFinder } from './user-finder';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

    //Propriedades

    //Construtor
	constructor(private authService: UserAuthService,
				private finderUser: UserFinder) {


    }

    //Method
    public login (infoUser: User): Boolean {

		let resultLoad = this.finderUser.loadByAccount(infoUser);

		if(resultLoad == null){
			return false;
		}

		this.authService.signIn(resultLoad);

		return true;
    };


}
