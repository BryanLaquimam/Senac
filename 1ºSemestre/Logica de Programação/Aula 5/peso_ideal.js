const prompt = require("prompt-sync")()

let nome = prompt("Digite o seu nome: ")

const sexo = prompt("Digite seu sexo: ")

const altura = Number(prompt("Digite sua altura: "))

let pesoideal = altura

if(sexo == 'F' || 'f'){
    pesoideal = (62.1 * altura) - 44.7
}

if(sexo == 'M' || 'm'){
    pesoideal = (72.7 * altura) - 58
}

let peso = sexo + altura

console.log(`Seu nome é:${nome} e sua altura é: ${peso + altura}`)
