const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite um número: "));

if (n1 % n2 === 0 || n2 % n1 == 0) {
    console.log("São múltiplos");
} else {
    console.log("Não são múltiplos");
}