import { Util } from "./Util";

export class Personagem {
    /* treinarDefesa(tempoTreinoHoras: number): Personagem {
        this.defesa += tempoTreinoHoras* Util.randomizar(1,10);
        this.vitalidade -= tempoTreinoHoras* Util.randomizar(1,10);
    } */
    nome: string = '';
    nivel: number = 1;
    vida: number = 10;
    ataque: number = 1;
    defesa: number = 1;
    raca: string = '';
    classe: string = '';
    vitalidade: number = 1;
    mana: number = 10;
    intelecto: number = 1;
    armadura: number = 1;

    constructor(nome: string){
        this.nome = nome;
        this.ataque = Util.randomizar(10,100);
        this.defesa = Util.randomizar(10,100);
        this.vida = Util.randomizar(100,1000);
        this.mana = Util.randomizar(100,1000);
        this.intelecto = Util.randomizar(10,100);
        this.armadura = Util.randomizar(10,100);
        this.vitalidade = Util.randomizar(10,100);
        this.nivel = Util.randomizar(1,10);
        this.raca = '';
        this.classe = '';
    }
    treinarAtaque(tempoTreinoHoras: number): void{
        this.ataque += tempoTreinoHoras* Util.randomizar(1,10);
        this.vitalidade -= tempoTreinoHoras* Util.randomizar(1,10);
    
        if(this.vitalidade < 0){
            throw new Error ("O heroi morreu!");
        }
    }
    treinarDefesa(tempoTreinoHoras: number): void{
        this.defesa += tempoTreinoHoras* Util.randomizar(1,10);
        this.vitalidade -= tempoTreinoHoras* Util.randomizar(1,10);

        if(this.vitalidade < 0){
            throw new Error ("O heroi morreu!");
        }
    }
    treinarIntelecto(tempoTreinoHoras: number): void{
        this.intelecto += tempoTreinoHoras* Util.randomizar(1,10);
        this.vitalidade -= tempoTreinoHoras* Util.randomizar(1,10);

        if(this.vitalidade < 0){
            throw new Error ("O heroi morreu!");
        }
    }
    descansar(tempoDescansoHoras: number): void{
        if(tempoDescansoHoras > 5 ){
            this.vitalidade += 5;
        } else{
            this.vitalidade += tempoDescansoHoras;
        }
    }
}