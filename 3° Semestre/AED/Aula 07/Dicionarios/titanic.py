import csv

titanic = []

with open("train.csv", mode="r") as arq:
    dados_csv = csv.DictReader(arq)
    for linha in dados_csv:
        titanic.append(linha)
        
#print(titanic[0])
#print(titanic[0]["Name"])

def titulo(mensa, tracos='-'):
    print()
    print(mensa.upper())
    print(tracos*40)
    
def analise_sexo():
    titulo("Análise dos Passageiros por Sexo")
    # Total de Passageiros: x
    # Sexo Masculino: x
    #   Sobrecicentes: x
    #   Mortos: x
    # Sexo Feminino: x
    #   Sobrecicentes: x
    #   Mortos: x
    
def media_top10():
    titulo("Média de Idades e Top 10")
    # Média das Idades:
    # Listagem dos 10 +idosos
    # Nº Nome.......................: Idade.: Sobrevivente
    # 1 Xxxxxxxxxxxx                  80 anos     Sim/Não
    
def analise_classe():
    titulo("Análise dos Passageiros por Classe")
    # Total de Passageiros: x
    # 1ª Classe: x
    #   Sobreviventes: x - x%
    #   Mortos: x - x%
    # 2ª Classe: x
    #   Sobreviventes: x - x%
    #   Mortos: x - x%
    # 3ª Classe: x
    #   Sobreviventes: x - x%
    #   Mortos: x - x%
    
    
while True:
    titulo("Passageiros do Titanic", "=")
    print("1. Análise por Sexo")
    print("2. Média das Idades e Top 1- +Idosos")
    print("3. Análise por Classe")
    print("4. Finalizar")
    opcao = int(input("Opções: "))
    if opcao == 1:
        analise_sexo()
    elif opcao == 2:
        media_top10()
    elif opcao == 3:
        analise_classe()
    elif opcao == 4:
        break