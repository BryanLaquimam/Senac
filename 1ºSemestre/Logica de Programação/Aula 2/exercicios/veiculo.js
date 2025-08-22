const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do veiculo R$: "))

const entrada = valor * 0.50
const parcela = entrada / 12

console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`Saldo em 12x de R$: ${parcela.toFixed(2)}`)