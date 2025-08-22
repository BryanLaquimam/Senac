import random
import os

# Lista de palavras
PALAVRAS = [
    # Tecnologia
    "computador", "internet", "teclado", "monitor", "programa",
    # Animais
    "elefante", "girafa", "tartaruga", "borboleta", "canguru",
    "pinguim", "macaco", "zebra", "rinoceronte", "hipopotamo",
    # Comidas
    "macarronada", "hamburguer", "pizza", "churrasco", "sorvete",
    "feijoada", "sushi", "paella", "tacos", "burrito",
    # Países
    "brasil", "argentina", "canada", "japao", "australia",
    "portugal", "espanha", "italia", "mexico", "egito",
    # Esportes
    "futebol", "volei", "basquete", "natacao", "atletismo",
    "tenis", "surfe", "skate", "boxe", "judô",
    # Natureza
    "montanha", "oceano", "floresta", "deserto", "cachoeira",
    "vulcao", "pantanal", "savana", "tundra", "arrecife",
    # Profissões
    "medico", "professor", "engenheiro", "cozinheiro", "bombeiro",
    "policial", "jardineiro", "carteiro", "motorista", "artista",
    # Objetos do cotidiano
    "cadeira", "mesa", "garrafa", "janela", "cortina",
    "telefone", "ventilador", "abajur", "tapete", "almofada",
    # Transportes
    "bicicleta", "automovel", "caminhao", "navio", "aviao",
    "trem", "metro", "moto", "barco", "helicoptero",
    # Frutas
    "banana", "maca", "laranja", "abacaxi", "melancia",
    "uva", "morango", "kiwi", "manga", "abacate"
]

arquivo_ranking = "ranking.txt"
historico_file = "historico.txt"

# Escolhe uma palavra aleatória da lista, garantindo que tenha entre 4 e 12 letras
def escolher_palavra():
    palavra = random.choice(PALAVRAS)
    while len(palavra) < 4 or len(palavra) > 12:
        palavra = random.choice(PALAVRAS)
    return palavra.lower()

def mostrar_forca(erros):
    estagios = [
        """
           ------
           |    |
           |
           |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |    |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |   /
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |   / \\
           |
        --------
        """
    ]
    print(estagios[erros])

# Salva a pontuação com sistema de bônus por tentativas não usadas
def salvar_pontuacao(nome, vitoria, tentativas_restantes):
    pontos = vitoria * (10 + tentativas_restantes * 2)
    ranking = carregar_ranking()
    ranking[nome] = ranking.get(nome, 0) + pontos
    with open(arquivo_ranking, "w") as f:
        for jogador, pts in ranking.items():
            f.write(f"{jogador}:{pts}\n")

# Carrega o ranking de jogadores do arquivo
def carregar_ranking():
    ranking = {}
    if os.path.exists(arquivo_ranking):
        with open(arquivo_ranking, "r") as f:
            for linha in f:
                if ":" in linha:
                    nome, pontos = linha.strip().split(":")
                    ranking[nome] = int(pontos)
    return ranking

# Mostra o ranking ordenado por pontos
def mostrar_ranking():
    ranking = carregar_ranking()
    print("\n=== RANKING DE JOGADORES ===")
    print("{:<20} {:<10}".format("Jogador", "Pontos"))
    print("-" * 30)
    for nome, pontos in sorted(ranking.items(), key=lambda x: x[1], reverse=True):
        print("{:<20} {:<10}".format(nome, pontos))

    input("\nPressione Enter para voltar ao menu...")

# Registra o histórico de partidas
def registrar_historico(nome, palavra, resultado, tentativas):
    with open(historico_file, "a") as f:
        f.write(f"{nome},{palavra},{resultado},{tentativas}\n")

# Mostra o histórico de partidas recentes
def mostrar_historico():
    if not os.path.exists(historico_file):
        print("Nenhum histórico de partidas encontrado.")
        return
    
    print("\n=== ÚLTIMAS PARTIDAS ===")
    print("{:<20} {:<15} {:<10} {:<10}".format("Jogador", "Palavra", "Resultado", "Tentativas"))
    print("-" * 55)
    
    with open(historico_file, "r") as f:
        linhas = f.readlines()[-10:]
        for linha in reversed(linhas):
            nome, palavra, resultado, tentativas = linha.strip().split(",")
            print("{:<20} {:<15} {:<10} {:<10}".format(nome, palavra, resultado, tentativas))
    
        input("\nPressione Enter para voltar ao menu...")

# Obtém uma letra do usuário com validação
def obter_letra():
    while True:
        tentativa = input("Digite uma letra: ").lower()
        if len(tentativa) != 1:
            print("Por favor, digite apenas UMA letra.")
        elif not tentativa.isalpha():
            print("Por favor, digite apenas LETRAS (a-z).")
        else:
            return tentativa

# Função principal do jogo da forca
def jogar_forca(nome):
    palavra = escolher_palavra()
    letras_certas = ["_" for _ in palavra]
    letras_erradas = []
    tentativas = 6
    vitoria = 0

    print(f"\nPalavra: {' '.join(letras_certas)}")
    
    while tentativas > 0 and "_" in letras_certas:
        print(f"\nTentativas restantes: {tentativas}")
        print("Letras erradas:", ", ".join(letras_erradas) if letras_erradas else "Nenhuma")
        mostrar_forca(len(letras_erradas))

        tentativa = obter_letra()

        if tentativa in letras_certas or tentativa in letras_erradas:
            print("Você já tentou essa letra.")
            continue

        if tentativa in palavra:
            for i, letra in enumerate(palavra):
                if letra == tentativa:
                    letras_certas[i] = tentativa
            print("Letra correta!")
        else:
            letras_erradas.append(tentativa)
            tentativas -= 1
            print("Letra incorreta!")

        print("\nPalavra: ", " ".join(letras_certas))
        

    if "_" not in letras_certas:
        print(f"\nParabéns, {nome}! Você acertou a palavra: {palavra}")
        vitoria = 1
        resultado = "Venceu"
    else:
        mostrar_forca(6)
        print(f"\nVocê perdeu, {nome}! A palavra era: {palavra}")
        resultado = "Perdeu"

    registrar_historico(nome, palavra, resultado, 6 - tentativas)
    salvar_pontuacao(nome, vitoria, tentativas)

    input("\nPressione Enter para voltar ao menu...")

def menu():
    print("\n=== JOGO DA FORCA ===")
    nome = input("Digite seu nome: ").strip().capitalize()
    
    while True:
        print("\n=== JOGO DA FORCA ===")
        print(f"Jogador atual: {nome}")
        print("\n1. Jogar")
        print("2. Ver Ranking")
        print("3. Ver Histórico")
        print("4. Trocar de Jogador")
        print("5. Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            jogar_forca(nome)
        elif opcao == "2":
            mostrar_ranking()
        elif opcao == "3":
            mostrar_historico()
        elif opcao == "4":
            nome = input("Digite o novo nome do jogador: ").strip().capitalize()
            print(f"Jogador alterado para: {nome}")
        elif opcao == "5":
            print("Até logo!")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    menu()