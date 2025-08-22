export class Produto {
  private _nome: string;
  private _preco: number;
  private _estoque: number;

  constructor(_nome: string, _preco: number, _estoque: number) {
    this._nome = _nome;
    this._preco = _preco;
    this._estoque = _estoque;
  }

  public get Nome(): string {
    return this._nome;
  }

  public get Preco(): number {
    return this._preco;
  }

  public get Estoque(): number {
    return this._estoque;
  }

  public vender(quantidade: number): boolean {
    if (quantidade <= this.Estoque) {
      this._estoque -= quantidade;
      return true;
    }
    return false;
  }

  public calcularPrecoComDesconto(descontoEmPercentual: number): number {
    const desconto = (this._preco * descontoEmPercentual) / 100;
    return this._preco - desconto;
  }
}

const produto = new Produto("camisa", 50, 50);
console.log(`Nome: ${produto.Nome}`);
console.log(`Preço: R$ ${produto.Preco}`);
console.log(`Estoque: ${produto.Estoque}`);

if (produto.vender(51)) {
  console.log("Venda realizada com sucesso!");
} else {
  console.log("Estoque insuficiente");
}

console.log(
  `Preço com 10% de desconto: R$ ${produto.calcularPrecoComDesconto(10)}`
);
