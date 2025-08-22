import { Personagem } from "./personagem";
import prompt from 'prompt-sync';

const teclado = prompt();

const nome = teclado('Digite o nome do heroi: ');
const heroi: Personagem = new Personagem(nome);
heroi.raca = teclado('Digite a raça do heroi: ');
heroi.classe = teclado('Digite a classe do heroi: ');


if(heroi.nome === "Edécio"){
    heroi.ataque = 1000;
    heroi.defesa = 1000;
    heroi.vida = 10000;
    heroi.mana = 10000;
    heroi.intelecto = 1000;
    heroi.armadura = 1000;
    heroi.vitalidade = 1000;
    heroi.nivel = 100;
}
while(true){
    console.log("============== MENU ==============")
    console.log("1 - Treinar ataque");
    console.log("2 - Treinar defesa");
    console.log("3 - Treinar intelecto");
    console.log("4 - Descansar");
    console.log("5 - Status");
    console.log("6 - Batalhar");
    console.log("0 - Sair");

    const opcao: number = +teclado("Escolha uma opção: ");

    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            const numeroHorasTA: number = +teclado("Digite o número de horas de treino: ");
            heroi.treinarAtaque(numeroHorasTA);
            break;
        case 2:
            const numeroHorasTD: number = +teclado("Digite o número de horas de treino: ");
            heroi.treinarDefesa(numeroHorasTD);
            break;
        case 3:
            const numeroHorasTI: number = +teclado("Digite o número de horas de treino: ");
            heroi.treinarIntelecto(numeroHorasTI);
            break;
        case 4:
            const numeroHorasD: number = +teclado("Digite o número de horas de descanso: ");
            heroi.descansar(numeroHorasD);
            break;
        case 5:
            console.table(heroi);
            break;
        case 6:
            
        default:
            break;
    }



}
