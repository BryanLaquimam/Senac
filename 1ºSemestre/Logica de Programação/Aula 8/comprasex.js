const prompt = require("prompt-sync")()

const produtos = []
const precos = []

console.log("Informe a lista de compras do super")
console.log("-".repeat(20))

let continua
do {
    const x = prompt("Produto: ")
    const y = Number(prompt("Preço: "))

    produtos.push(x)
    precos.push(y)

    continua = prompt("Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("\nLista dos Produtos Adicionados")
console.log("-".repeat(30))

let total = 0
for (let i = 0; i < produtos.length; i = i + 1) {
    console.log(`${produtos[i]} - R$: ${precos[i].toFixed(2)}`)
    total = total + precos[i]
}

console.log("-".repeat(30))
console.log(`Total Previsto R$: ${total.toFixed(2)}`)