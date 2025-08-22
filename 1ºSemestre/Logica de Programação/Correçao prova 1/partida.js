const prompt = require("prompt-sync")()

const clube1 = prompt("1º Time: ")
const gols1 = Number(prompt("Gols: "))
const clube2 = prompt("2º Time: ")
const gols2 = Number(prompt("Gols: "))

if(gols1 > gols2) {
    console.log(`Vencedor foi ${clube1}`)
} else if (gols2 > gols1) {
    console.log(`Vencedor foi ${clube2}`)
} else {
    console.log(`A partida terminou empatada`)
}
if (gols1 + gols2 > 0) {
    console.log(`A partida teve ${gols1+gols2} gols`)
}