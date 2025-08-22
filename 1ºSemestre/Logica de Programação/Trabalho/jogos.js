const prompt = require("prompt-sync")()
const fs = require("fs")    //  fs (file system): pacote que contém
// funções para manipulação de arquivos

const jogo = []
const genero = []
const precos = []

function inclusao() {
    console.log("\nInclusão de Jogos")
    console.log("-----------------------------")

    const x = prompt("Nome do Jogo: ")
    const y = prompt("Gênero............: ")
    const z = Number(prompt("Preço R$........: "))


    jogo.push(x)
    genero.push(y)
    precos.push(z)

    console.log("===================================================")
    console.log("OK! Jogo Cadastrado com Sucesso!")
    console.log("===================================================")
}

function listagem() {
    console.log("\nLista dos Jogos Cadastrados")
    console.log("---------------------------------------------------")

    console.log("Nome do Jogo.......: Gênero.......: Preço R$........:")
    console.log("=====================================================")


    for (let i = 0; i < jogo.length; i++) {
        if (precos[i] == 0) {
            console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ` + "Grátis".padStart(10)) // Se o valor for 0 ele imprimi na lista como Grátis
        }else {
        console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ${precos[i].toLocaleString("pt-br", { minimumFractionDigits: 2 }).padStart(10)}`)
        }
    }
    console.log("=====================================================")
    // 30000 => .tofixed(2) => 30000.00
    // 30000 => .toLocaleString("pt-br", {minimumFractionDigits: 2}) => 30.000,00
}

function pesquisaGenero() {
    const generoPesquisa = prompt("Informe o gênero que deseja pesquisar: ") ;
    console.log(`\nJogos do Gênero: ${generoPesquisa}`)
    console.log("-".repeat(30))
    console.log("Nome do Jogo.......: Gênero.......: Preço R$........:")
    console.log("=====================================================")

    let encontrouJogo = false;

    for (let i = 0; i < jogo.length; i++) {
        if (genero[i].toLowerCase() === generoPesquisa.toLowerCase()) {
            if (precos[i] == 0) {
                console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ` + "Grátis".padStart(10))
            } else {
            console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ${precos[i].toLocaleString("pt-br", { minimumFractionDigits: 2 }).padStart(10)}`)
            }
            encontrouJogo = true;
        }
    }
    if (!encontrouJogo) {
        console.log(`\nNenhum jogo encontrado com o Gênero ${generoPesquisa}.\n`);
    }
    console.log("=====================================================")
}

function intervalo() {
    const minPreco = Number(prompt("Digite um valor minimo R$: "));
    const maxPreco = Number(prompt("Digite um valor maximo R$: "));

    let contador = 0
    
    console.log("\nNome do Jogo.......: Gênero.......: Preço R$........:")
    console.log("=====================================================")
    for (let i = 0; i < jogo.length; i++) {
        if (precos[i] >= minPreco && precos[i] <= maxPreco) {
            if (precos[i] == 0) {
                console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ` + "Grátis".padStart(10))
            }else {
                console.log(`${String(i + 1).padStart(2)} ${jogo[i].padEnd(25)} ${genero[i].padEnd(12)} ${precos[i].toLocaleString("pt-br", { minimumFractionDigits: 2 }).padStart(10)}`)
            }
            contador ++
        }
    }
    console.log("=====================================================")
    if (!contador){
        console.log("\nNão existem jogos nesse intervalo de Preços")
        console.log("\n=====================================================")
    }
}

function exclusao() {
    const excjogo = Number(prompt("Informe o numero do jogo a excluir: ")) - 1;
    jogo.splice(excjogo, 1);
    genero.splice(excjogo, 1);
    precos.splice(excjogo, 1);

    console.log("\n=====================================================")
    console.log("\nJogo excluido com Sucesso!");
    console.log("\n=====================================================")
}

function alterapreco() {
    console.log("\n===================================================")
    const altpreco = Number(prompt("Digite o numero do jogo que deseja alterar: ")) - 1
    const newvalor = Number(prompt("Digite um novo valor: "))
    console.log("\n===================================================")
    console.log("\nPreço Alterado com Sucesso")
    console.log("\n===================================================")

    precos[altpreco] = newvalor
}

function gravaDados() {
    const jogos = []

    // atribui o conteudo dos vetores para um unico vetor
    for (let i = 0; i < jogo.length; i++) {
        jogos.push(jogo[i] + ";" + genero[i] + ";" + precos[i])
    }

    //Salva o conteudo do vetor em um arquivo
    fs.writeFileSync("jogos.txt", jogos.join("\n"))

    console.log("Dados salvos em arquivo...")
}

function carregaDados() {
    // se existe o arquivo carros.txt
    if (fs.existsSync("jogos.txt")) {
        // lê o conteudo do arquivo e já separa em elementos de vetor
        const jogos = fs.readFileSync("jogos.txt", "utf-8").split("\n")

        for (let i = 0; i < jogos.length; i++) {
            // separa uma linha, em elementos de vetor a partir da ocorrencia ";"
            const partes = jogos[i].split(";")

            jogo.push(partes[0])
            genero.push(partes[1])
            precos.push(Number(partes[2]))
        }
    }
}

// chama a função carregaDados que lê os dados do arquivo e atribui para os vetores
carregaDados()

//-------------------------------------------- Programa Principal
do {
    console.log("\nJogos Avenida - Locadora de Jogos")
    console.log("===================================================")
    console.log("1. Inclusão de Jogos")
    console.log("2. Lista dos Jogos Cadastrados")
    console.log("3. Pesquisa por Gênero")
    console.log("4. Pesquisa por Intevalo de Preços")
    console.log("5. Alteração de Preço de Jogo")
    console.log("6. Exclusão de Jogo")
    console.log("7. Finalizar")
    console.log("===================================================")
    const opcao = Number(prompt("Opção: "))
    if (opcao == 1) {
        inclusao()
    } else if (opcao == 2) {
        listagem()
    } else if (opcao == 3) {
        pesquisaGenero()
    } else if (opcao == 6) {
        exclusao()
    } else if (opcao == 4) {
        intervalo()
    } else if (opcao == 5) {
        alterapreco()
    } else if (opcao == 7) {
        console.log("===================================================")
        console.log("Programa Finalizado com Sucesso!")
        console.log("===================================================")
        break
    } else {
        console.log("\n===================================================")
        console.log("\nDigite uma opção válida")
        console.log("\n===================================================")
    }
} while (true)

// no final, chama a função que grava os dados dos vetores em arquivo
gravaDados()