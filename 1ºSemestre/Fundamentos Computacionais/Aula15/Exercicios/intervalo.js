const prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número: "));

if (num > 5 && num < 10 ||num <= 2 || num >= 20) {
    console.log("O número está dentro do intervalo");
} else {
    console.log("O número não está dentro do intervalo");
}

if ((num <= 5 || num >= 10) && (num > 2 && num < 20)) {
    console.log("O número não está dentro do intervalo");
} else {
    console.log("O número está dentro do intervalo");
}