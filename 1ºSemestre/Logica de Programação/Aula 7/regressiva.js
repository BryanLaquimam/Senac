const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

console.log(`Contagem regressiva: `)
console.log("-".repeat(20))

for (let i = num; i >= 1; i = i - 1) {
    console.log(`${i}`)
}

console.log(`Fogo!!!`)