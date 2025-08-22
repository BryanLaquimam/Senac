import { SALDO_INSUFICIENTE, VALOR_INVALIDO } from "./consts";

export class ContaBancaria {

    private _saldo: number;
    private _numeroConta: number;

    constructor(numeroConta: number) {
        this._numeroConta = numeroConta;
        this._saldo = 0;
    }

    public consultarSaldo(): number {
        return this._saldo;
    }
    public depositar(valor: number): void {
        this.verificaSaldoParaTransacaoOuFalha(valor);

        this._saldo += valor;
    }
    public sacar(valor: number) {
        this.verificaSaldoSuficienteOuFalha(valor);
        this.verificaSaldoParaTransacaoOuFalha(valor);

        this._saldo -= valor;
    }

    private verificaSaldoParaTransacaoOuFalha(valor: number): void {

        if (valor <= 0) {
            throw new Error(VALOR_INVALIDO);
        }
    }

    private verificaSaldoSuficienteOuFalha(valor: number): void {
        const saldoInsuficiente = valor > this._saldo;
        if (saldoInsuficiente) {
            throw new Error(SALDO_INSUFICIENTE);
        }
    }

}