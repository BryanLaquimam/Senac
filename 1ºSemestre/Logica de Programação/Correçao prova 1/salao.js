const prompt = require("prompt-sync")()

const num = Number(prompt("Nº Cortes: "))
const Valor = Number(prompt("Valor do Corte R$: "))

const total = num*Valor
const salao = total * 0.30
const cabeleireira = total * 0.70

console.log(`Total R$: ${total.toFixed(2)}`)
console.log(`Salão R$: ${salao.toFixed(2)}`)
console.log(`Cabeleireira R$: ${cabeleireira.toFixed(2)}`)