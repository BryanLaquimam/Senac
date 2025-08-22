import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
    protected _turma: string = "2024/2";
    constructor(nome, cpf, turma: string) {
        super(nome, cpf);
        this._turma = turma;
    }
}