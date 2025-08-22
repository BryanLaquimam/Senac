const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))

console.log(`\nOpções de Pagamento: ${produto} `)
//console.log("-----------------------------")
console.log("-".repeat(30))

for (let i = 1; i <= 10; i++) {
    console.log(`${i} X de R$: ${(preco / i).toFixed(2)}`)
}