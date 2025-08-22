const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

const ate = Number(prompt("Tabuada até quanto? "))

console.log(`\nTabuada do ${num}`)
console.log("-----------------------------")

for (let i = 1; i <= ate; i = i + 1) {
    console.log(`${num} x ${i} = ${num * i}`)
    console.log("--------------------------")
}