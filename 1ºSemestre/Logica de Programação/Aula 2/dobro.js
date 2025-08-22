const prompt = require("prompt-sync")()

//Number() serve para converter a entrada em número
const num = Number(prompt("Numero: "))
const dobro = num + num

console.log(`O dobro de ${num} é ${dobro}`)