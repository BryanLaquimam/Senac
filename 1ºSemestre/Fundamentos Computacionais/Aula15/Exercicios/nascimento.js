/* 02 - EUA (Escreva Um Algoritmo) que leia a o ano de nascimento de um usuário e informe se ele for menor ou maior de idade. */

const prompt = require("prompt-sync")()

let nascimento = Number(prompt("Digite seu ano de nascimento: "))
let anoAtual  = new Date().getFullYear()
maior = anoAtual - nascimento

if(maior >= 18 ){
    console.log(`Voce e maior de idade`)
} else {
    console.log(`Voce e menor de idade`)
}