const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

if (num < 5) {
    console.log(`Ops... digite um valor maior que 5`)
} else {
    console.log(`Multiplos de 5 até ${num}`)
    for (let i = 5; i <= num; i = i + 5){
        console.log(i)
    }
}