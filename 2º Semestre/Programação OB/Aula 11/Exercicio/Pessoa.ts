export class Pessoa {
    protected _nome: string = "Nome";
    protected _cpf: string = "CPF";
    protected _endereco: string = "Endereço";
    protected _estadoCivil:string = "EstadoCivil";

    constructor(nome: string, cpf:string) {
        this._nome = nome;
        this._cpf = cpf;
    }

}

