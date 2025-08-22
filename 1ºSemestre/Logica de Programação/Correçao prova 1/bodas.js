const prompt = require("prompt-sync")()

const nome = prompt("Funcionário: ")
const entrou = Number(prompt("Ano que entrou: "))
const atual = Number(prompt("Ano atual: "))

const tempo = atual - entrou

if ( tempo % 5 == 0) {
    console.log(`${nome} venha para a festa de bodas em ${atual}`)
} else {
    console.log(`${nome} não venha para a festa de bodas em ${atual}`)
}