import random
import time
import os  # pacote com funções do sistema operacional
from colorama import Fore, Back, Style

temp = "🐯🐯🐮🐮🐢🐢🪿🪿🦜🦜🪼🪼🐠🐠🐔🐔"
figuras = list(temp)

jogo = []
apostas = []

print("="*40)
print("Jogo da Memória")
print("="*40)
nome_jogador = input("Nome do jogador: ")

def preenche_matriz():
    for i in range(4):
        jogo.append([])
        apostas.append([])
        for _ in range(4):
            num = random.randint(0, len(figuras)-1)
            jogo[i].append(figuras[num])
            apostas[i].append("🟥")
            figuras.pop(num)

def mostra_tabuleiro():
    os.system("cls")  # Limpa a tela
    print("   1   2   3   4")
    for i in range(4):
        print(f"{i+1}", end="  ")
        for j in range(4):
            print(f" {jogo[i][j]} ", end="")
        print("\n")
    
    print("Memorize a posição dos bichos...")
    time.sleep(2)
    
    print("Contagem regressiva: ", end="")
    for i in range(10, 0, -1):
        print(i, end=" ", flush=True)
        time.sleep(1)

    os.system("cls")

def mostra_cartas_e_acertos():
    os.system("cls")  # Limpa a tela
    print("   1   2   3   4")
    for i in range(4):
        print(f"{i+1}", end=" ")
        for j in range(4):
            print(f" {apostas[i][j]} ", end="")
        print("\n")


preenche_matriz()
mostra_tabuleiro()
tempo_inicial = time.time()
total_pontos = 0

def aposta_coordenada(num):
    while True:
        mostra_cartas_e_acertos()
        posicao = input(f"{num}ª Coordenada (2 números: linha e coluna): ")
        if len(posicao) != 2:
            print("Informe uma dezena, por exemplo, 12, 24, 31, ...")
            time.sleep(2)
            continue        # volta ao inicio da repetição
        x = int(posicao[0])-1           # "34"
        y = int(posicao[1])-1
        try:
            if apostas[x][y] == "🟥":
                apostas[x][y] = jogo[x][y]
                break
            else:
                print("Coordenada já apostada...")
                time.sleep(2)
        except IndexError:
            print("Erro... Coordenada inválida")
            time.sleep(2)
            
    return x,y

def verifica_vencedor():
    contador = 0
    for i in range(4):
        for j in range(4):
            if apostas[i][j] == "🟥":
                contador += 1
    return contador

# ------------------------ Codigo do Programa Principal
while True:
    x1, y1 = aposta_coordenada(1)
    x2, y2 = aposta_coordenada(2)
    mostra_cartas_e_acertos()
    
    if apostas[x1][y1] == apostas[x2][y2]:
        print("Parabéns! Você acertou! 😉")
        total_pontos += 10
        cartas_viradas = verifica_vencedor()
        if cartas_viradas == 0:
            print("Parabéns! Você venceu! 🏆🏆")
            break
        else:
            print(f"Falta(m) {cartas_viradas//2} bichos para descobrir")
        time.sleep(2)
    else:
        print("Errou... Tente novamente. 😡")
        total_pontos -= 5
        apostas[x1][y1] = "🟥"
        apostas[x2][y2] = "🟥"

        continuar = input("Deseja continuar (S/N): ").upper()
        if continuar != "S":
            print("Ah... Você perdeu essa... 🤔")
            break        

tempo_final = time.time()
duracao_jogo = tempo_final - tempo_inicial

print()
print("*"*40)
print(f"Nome do Jogador: {nome_jogador}")
print(f"Total de Pontos: {total_pontos}")
print(f"Duração do Jogo: {duracao_jogo: 7.3f} segundos")
print("*"*40)

# --------- Gravar dados do jogador em arquivo texto (ranking)
dados = []
if os.path.isfile("ranking.txt"):
    with open("ranking.txt", "r") as arq:
        dados = arq.readlines()

dados.append(f"{nome_jogador};{total_pontos};{duracao_jogo:.3f}\n")

with open("ranking.txt", "w") as arq:
    for dado in dados:
        arq.write(dado)

nomes = []
pontos = []
tempos = []

for dado in dados:
    partes = dado.split(";")
    nomes.append(partes[0])
    pontos.append(int(partes[1]))
    tempos.append(float(partes[2])*-1)

print()
print("="*47)
print("---------< Ranking dos Melhores Jogadores >---------")
print("="*47)
print("N° Nome do Jogador.........: Pontos Tempo(seg.)")

# ------ Rotina para ordenar as listas (zipando elas)
juntas = sorted(zip(pontos, tempos, nomes), reverse=True)

# volta a separar as listas (como se fosse um "unzip")
pontos2, tempos2, nomes2 = zip(*juntas)

for num, (nome, ponto, tempo) in enumerate(zip(nomes2, pontos2, tempos2), start=1):
    if nome == nome_jogador and ponto == total_pontos:
        print(Fore.RED + f"{num:2d} {nome:25s}   {ponto:2d}   {tempo*-1:10.3f}", end="")
        print(Style.RESET_ALL)
    else:
        print(f"{num:2d} {nome:25s}   {ponto:2d}   {tempo*-1:10.3f}")

# ----------------------------------------------------------------------------------
# Exercicios:
# 1. Solicitar nome do usuario no inicio do jogo
# 2. Definir uma pontuação para acertos (+10) e erros (-5)
# 3. Obter data e hora do inicio e final do jogo, mostrar duração
# 4. Salvar nome, pontuação e duração em arquivo de texto
# 5. Classificar e mostrar ranking
# 6. No final, mostrar a pontuação obtida pelo jogador e tempo