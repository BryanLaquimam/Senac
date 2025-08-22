const prompt = require("prompt-sync")()

const nota1 = Number(prompt("1° Nota: "))
const nota2 = Number(prompt("2ª Nota: "))

const media = (nota1 + nota2) / 2

console.log(`A media é: ${media}`)