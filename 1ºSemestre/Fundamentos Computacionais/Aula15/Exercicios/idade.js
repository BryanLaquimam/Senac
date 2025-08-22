const prompt = require("prompt-sync")()

let idade = Number(prompt("Digite a idade do atleta: "));

if (idade < 5) {
    console.log("Fora da faixa");
} else if (idade >= 5 && idade <= 7) {
    console.log("Infantil 1");
} else if (idade >= 8 && idade <= 10) {
    console.log("Infantil 2");
} else if (idade >= 11 && idade <= 13) {
    console.log("Juvenil 1");
} else if (idade >= 14 && idade <= 17) {
    console.log("Juvenil 2");
} else {
    console.log("Adulto");
}