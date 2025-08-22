import { SALDO_INSUFICIENTE, VALOR_INVALIDO } from "./consts";
import { ContaBancaria } from "./ContaBancaria";

test("Deve ser possível depositar dinheiro em uma conta", () => {
    const conta: ContaBancaria = new ContaBancaria(123);

    conta.depositar(100);

    expect(conta.consultarSaldo()).toBe(100);
});

test("Deve gerar um erro ao tentar depositar um valor negativo", () => {
    const conta: ContaBancaria = new ContaBancaria(123);

    expect(() => conta.depositar(-100)).toThrow(VALOR_INVALIDO);
});

test("Deve gerar um erro ao tentar depositar o valor zero", () => {

    const conta: ContaBancaria = new ContaBancaria(123);

    expect(() => conta.depositar(0)).toThrow(VALOR_INVALIDO);
});

test("Deve ser possível sacar dinheiro de uma conta", () => {
    const conta: ContaBancaria = new ContaBancaria(123);

    conta.depositar(100);
    conta.sacar(50);

    expect(conta.consultarSaldo()).toBe(50);
});

test("Deve gerar um erro ao tentar sacar um valor maior do que o saldo", () => {
    const conta: ContaBancaria = new ContaBancaria(123);

    conta.depositar(100);

    expect(() => conta.sacar(200)).toThrow(SALDO_INSUFICIENTE);

});

test("Deve gerar um erro ao tentar sacar um valor negativo", () => {

    const conta: ContaBancaria = new ContaBancaria(123);

    expect(() => conta.sacar(-100)).toThrow(VALOR_INVALIDO);

});
