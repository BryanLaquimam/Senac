const prompt = require("prompt-sync")()

const peso1 = Number(prompt("Peso Inicial: "))
const peso2 = Number(prompt("Peso Final: "))

const perda = peso1 - peso2
const kg = Math.floor(perda)
const gr = (perda % 1) * 1000
//const gr = (perda - kg) * 1000

console.log(`Você perdeu ${kg} kg e ${gr.toFixed(0)} gr`)