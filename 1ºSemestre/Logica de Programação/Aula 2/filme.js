const prompt = require("prompt-sync")()

const titulo = prompt("Titulo do filme: ")
const duração = prompt("Duração: ")

console.log(`O filme ${titulo} tem a duração de ${duração} min.`)