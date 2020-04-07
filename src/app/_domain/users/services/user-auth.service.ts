import { Injectable } from "@angular/core";
import { User } from '../entities/user';

const KEY_AUTH_SERVICE = "kAssUser";

@Injectable({ providedIn: 'root' })
export class UserAuthService {

    constructor() {

    }

    //Salvar os dados do usuario localmente
    public load(): User {

        let jsonDados = localStorage.getItem(KEY_AUTH_SERVICE);

        var dadosUsuario = JSON.parse(jsonDados);

        return dadosUsuario;
    }   

    //Salvar os dados do usuario localmente
    public signIn(infoUser: User): void{

        let jsonDados = JSON.stringify(infoUser);

        localStorage.setItem(KEY_AUTH_SERVICE, jsonDados);

    }

    //Salvar os dados do usuario localmente
    public signOut(): void {

        localStorage.setItem(KEY_AUTH_SERVICE, null);

    }
 
}