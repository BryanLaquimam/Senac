const prompt = require("prompt-sync")()

const candidatos = []
const acertos = []

console.log(`Informe Lista de Candidatos: `)
console.log("-".repeat(30))

let continua
do {
    const nome = prompt("Canditado: ")
    const acerto = Number(prompt("Nº de Acertos: "))

    candidatos.push(nome)
    acertos.push(acerto)

    continua = prompt("Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log(`Lista dos Nomes: `)
console.log("-".repeat(30))

let total = 0
for (let i = 0; i < candidatos.lenght; i++) {
    console.log(`${candidatos[i]} Acertos: ${acerto[i].toFixed(2)}`)
    total = total + acertos[i]
}

console.log("-".repeat(30))
console.log(`Total de Acertos: ${total.toFixed(2)}`)