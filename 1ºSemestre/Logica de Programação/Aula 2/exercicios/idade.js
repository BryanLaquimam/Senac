const prompt = require("prompt-sync")()

const aluno = prompt("Nome do aluno: ")
const idade = Number(prompt("Idade do aluno: "))

const ano = 2024 - idade

console.log(`${aluno},você nasceu em: ${ano}`)