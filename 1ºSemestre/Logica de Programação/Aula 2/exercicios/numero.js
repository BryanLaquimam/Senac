const prompt = require("prompt-sync")()

const num = Number(prompt("O numero é: "))

const anterior = num - 1
const posterior = num + 1

console.log(`Vizinhos do ${num}: ${anterior} e ${posterior}`)

//outra forma
//console.log(`Vizinhos do ${num}: ${num-1} e ${num+1}`)