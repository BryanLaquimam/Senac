const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

console.log(`\nSeguintes ao ${num}`)
console.log("-".repeat(30))

for (let i = num+1; i <= num+10; i = i + 1) {
    console.log(`${i}`)
}