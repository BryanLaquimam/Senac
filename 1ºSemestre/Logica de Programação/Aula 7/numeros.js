const prompt = require("prompt-sync")()

const num1 = Number(prompt("1º numero: "))
const num2 = Number(prompt("2º numero: "))

console.log(`\nEntre ${num1} e ${num2}: `)
console.log("-".repeat(30))
if(num1 <= num2) {
    for (let i = num1; i <= num2; i = i + 1) {
        console.log(`${i}`)
    }
} else {
    for (let i = num1; i >= num2; i = i - 1) {
        console.log(i)
    }
}