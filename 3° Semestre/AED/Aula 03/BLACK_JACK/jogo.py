import random
import time
import sys

naipes = "♠♥♦♣"
extras = "JQKA"

baralho = []

# cria uma função em Python
def monta_baralho():
    for i in range(2, 11):
        for naipe in naipes:
            baralho.append(str(i)+naipe)
            
    for extra in extras:
        for naipe in naipes:
            baralho.append(extra + naipe)

# faz a chamada da função
monta_baralho()
# print(baralho)

# função que recebe o parâmetro/argumento carta
def pontos_carta(carta):
    # se tam da carta é 3: só pode ser 10♥, 10...
    if len(carta) == 3:
        valor = 10
    # se 1 caractere da carta for número, valor é num
    elif carta[0].isdigit():
        valor = int(carta[0])
    # se for A (às), vale 11
    elif carta[0] == "A":
        valor = 11
    # senão, só pode ser as letras J, Q, K. Valem 10
    else:
        valor = 10
    return valor

pontos_jogador = 0
contador = 0 
while True:
    # gera um número aleátorio entre 0 e tamanho do baralho
    num = random.randint(0, len(baralho)-1)
    # obtem e retira a carta do baralho
    carta = baralho.pop(num)
    
    contador += 1
    print(f"Sua {contador}ª Carta é: {carta}")
    time.sleep(2)
    
    pontos_jogador += pontos_carta(carta)
    
    if pontos_jogador > 21:
        break

    if contador >= 2:
        outra = input("Deseja outra Carta (S/N)? ")
        if outra.upper() == "N":
            break

print()
print("="*40)
print(f"Total de Pontos do jogador: {pontos_jogador}")
print("="*40)

if pontos_jogador > 21:
    print("Bah... Você perdeu!")
    sys.exit()

pontos_pc = 0
contador = 0 
while True:
    # gera um número aleátorio entre 0 e tamanho do baralho
    num = random.randint(0, len(baralho)-1)
    # obtem e retira a carta do baralho
    carta = baralho.pop(num)
    
    contador += 1
    print(f"{contador}ª Carta do Computador é: {carta}")
    time.sleep(2)
    
    pontos_pc += pontos_carta(carta)
    
    if pontos_pc > 21 or pontos_pc >= pontos_jogador:
        break

print()
print("="*40)
print(f"Total de Pontos do Computador: {pontos_pc}")
print("="*40)

# Única "forma" do jogador ganhar é o pc > 21
if pontos_pc > 21:
    print("Parabéns! Você venceu")
elif pontos_pc == pontos_jogador:
    print("Deu Empate... Jogue novamente")
else:
    print("Bah... Você perdeu")