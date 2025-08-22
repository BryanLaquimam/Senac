const prompt = require("prompt-sync")()

const amigos = []

console.log("informe o nome de 5 amigos")
console.log("-".repeat(20))

for (let i = 1; i <= 5; i = i + 1) {
    const nome = prompt(`${i}º Amigo(a): `)
    amigos.push(nome)
}

console.log("-".repeat(20))
console.log(`Seu primeiro amigo é ${amigos[0]}`)
console.log("-".repeat(20))

console.log("\nLista dos amigos informados:\n")

for (let i = 0; i < 5; i = i + 1) {
    console.log(`${i+1}º: ${amigos[i]}`)
}