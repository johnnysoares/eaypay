export class User {

    public id: number;

    public name: string;

    public documentNumber: string;

    public accountNumber: string;

    public password: string;

    //Construtor
    constructor(init?: Partial<User>) {

        Object.assign(this, init);

    }


}