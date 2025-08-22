const prompt = require("prompt-sync")()

const jantar = Number(prompt("custou R$: "))

const taxa = jantar * 0.10
// const taxa = jantar / 10

const total = jantar + taxa

console.log(`Taxa do GarçomR$: ${taxa.toFixed(2)}`)
console.log(`Total a Pagar R$: ${total.toFixed(2)}`)