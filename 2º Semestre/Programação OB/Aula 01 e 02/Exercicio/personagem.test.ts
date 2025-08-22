import { Personagem } from "./personagem";

describe("Treino de ataque", () => {
    it("Deve aumentar o ataque após treinar o ataque", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.ataque = 50;
        personagem.vitalidade = 100;
        const ataqueInicial = personagem.ataque;
    
        //Ação
        personagem.treinarAtaque(2);
    
        //Verificação
        expect(personagem.ataque).toBeGreaterThan(ataqueInicial);
    });
    
    it("Nao deve aumentar o ataque após treinar o ataque se o numero de horas de treino for 0", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.ataque = 50;
        personagem.vitalidade = 100;
        const ataqueInicial = personagem.ataque;
    
        //Ação
        personagem.treinarAtaque(0);
    
        //Verificação
        expect(personagem.ataque).toBeCloseTo(ataqueInicial);
    });
});

describe("Treino de defesa", () => {
    it("Deve aumentar a defesa após treinar defesa", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.defesa = 50;
        personagem.vitalidade = 100;
        const defesaInicial = personagem.defesa;
    
        //Ação
        personagem.treinarDefesa(2);
    
        //Verificação
        expect(personagem.defesa).toBeGreaterThan(defesaInicial);
    
        //Ação
       /*  const p: Personagem = personagem.treinarDefesa(2); */
    
        //Verificação
        /* expect(p.defesa).toBeGreaterThan(defesaInicial); */
    });
    
    it("Nao deve aumentar a defesa apos treinar se o numero de horas do treino for 0", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.defesa = 50;
        personagem.vitalidade = 100;
        const defesaInicial = personagem.defesa;
    
        //Ação
        personagem.treinarDefesa(0);
    
        //Verificação
        expect(personagem.defesa).toBeCloseTo(defesaInicial);
    });
});

describe("Vitalidade", () => {
    it("Deve morrer quando treinar bastante tempo com vitalidade", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 1;
        personagem.ataque = 50;

        //Ação e verificação
        expect(() => personagem.treinarAtaque(24)).toThrow("O heroi morreu!");
    });
});

describe("Descansar", () => {
    it("Deve aumentar a vitalidade apos descansar", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 100;
        const vitalidadeInicial = personagem.vitalidade;
    
        //Ação
        personagem.descansar(2);
    
        //Verificação
        expect(personagem.vitalidade).toBeGreaterThan(vitalidadeInicial);
    });

    it("Nao deve ultrapassar a vitalidade de 100 apos descansar", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 98;
        const vitalidadeInicial = personagem.vitalidade;
    
        //Ação
        personagem.descansar(24);
    
        //Verificação
        expect(personagem.vitalidade).toBeGreaterThan(100);
    });

    it("Nao deve aumentar a vitalidade apos descansar se o numero de horas de descanso for 0", () => {
        //Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 50;
        const vitalidadeInicial = personagem.vitalidade;
    
        //Ação
        personagem.descansar(0);
    
        //Verificação
        expect(personagem.vitalidade).toBeCloseTo(vitalidadeInicial);
    });

});