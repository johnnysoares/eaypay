import { Injectable } from "@angular/core";
import { User } from "../entities/user";

@Injectable({
    providedIn: "root",
})
export class UserFinder {
    //Propriedades

    //Construtor
    constructor() {}

    //Method
    public loadByAccount (infoUser: User): User {
       
        return this.findAll().find(item => item.accountNumber == infoUser.accountNumber);
    };

    //
    public findAll(): User[] {
        return [
            {
                id: 1,
                name: "Johnny Soares",
                documentNumber: "22893620850",
                accountNumber: "333783",
                password: ""
            },
            {
                id: 2,
                name: "Wanessa Rodrigues do Nascimento",
                documentNumber: "",
                accountNumber: "334941",
                password: ""
            },
            {
                id: 3,
                name: "Ivans Diniz",
                documentNumber: "",
                accountNumber: "333867",
                password: ""
            },
            {
                id: 4,
                name: "Sérgio Pires",
                documentNumber: "",
                accountNumber: "334924",
                password: ""
            },
        ];
    }

}
