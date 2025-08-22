/* 01 - FUP (Faça Um Programa) que receba três números, digitados pelo usuário, e em seguida apresente uma mensagem informando qual é o maior dentre os três. */

const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite um numero: "))
let n2 = Number(prompt("Digite um numero: "))
let n3 = Number(prompt("Digite um numero: "))

let maior = 0

if (n1 > n2 && n1 > n3) {
    maior = n1
} else if (n2 > n1 && n2 > n3){
    maior = n2
} else {
    maior = n3
}

console.log(`O maior numero é:${maior} `)