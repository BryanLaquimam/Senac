const prompt = require("prompt-sync")()

let nota1 = Number(prompt("Digite sua 1º nota: "));
let nota2 = Number(prompt("Digite sua 2º nota: "));
let nota3 = Number(prompt("Dgite a sua 3º nota: "));
let media = 0;

if (nota1 >= nota2 && nota1 >= nota3) {
    media = (nota1 * 4 + (nota2 + nota3) * 3) / 10;
} else if (nota2 >= nota1 && nota2 >= nota3) {
    media = (nota2 * 4 + (nota1 + nota3) * 3) / 10;
} else()