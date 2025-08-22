import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    protected _cpf: string;
    protected _dataUltimoAcesso: string;
}