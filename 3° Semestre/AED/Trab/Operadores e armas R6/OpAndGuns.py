import csv

operators = []
weapons = []

with open("operators.csv", mode="r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        operators.append(row)

with open("weapons.csv", mode="r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        weapons.append(row)

def titulo(texto):
    print("\n" + texto)
    print("-" * 40)

def agrupar_armas_por_tipo():
    titulo("Agrupamento de Armas por Tipo")
    grupos = {}

    for arma in weapons:
        tipo = arma['Type']
        grupos[tipo] = grupos.get(tipo, 0) + 1

    grupos_ordenados = sorted(grupos.items(), key=lambda item: item[1], reverse=True)

    print(f"{'Tipo':25s}: Quantidade")
    print("-" * 40)
    for i, (tipo, qtd) in enumerate(grupos_ordenados, start=1):
        print(f"{tipo:25s}: {qtd}")
        if i == 10:
            break
    input("\nPressione ENTER para continuar...")

def armas_mais_letais():
    titulo("Top 10 Armas Mais Letais (Maior Dano)")

    armas_ordenadas = sorted(weapons, key=lambda arma: int(arma['Damage']), reverse=True)

    print(f"{'Arma':20s} {'Tipo':15s} {'Dano'}")
    print("-" * 40)
    for arma in armas_ordenadas[:10]:
        print(f"{arma['Name']:20s} {arma['Type']:15s} {arma['Damage']}")
    input("\nPressione ENTER para continuar...")


def comparar_operadores():
    titulo("Comparar Operadores")
    
    operadores_dict = {operador['Name'].lower(): operador for operador in operators}
    
    while True:
        operador1 = input("Nome do 1º Operador: ").strip().lower()
        operador2 = input("Nome do 2º Operador: ").strip().lower()
        
        if operador1 not in operadores_dict or operador2 not in operadores_dict:
            print("Um ou ambos os operadores não foram encontrados. Tente novamente.\n")
            continue
        break

    velocidades = []
    blindagens = []

    for nome in [operador1, operador2]:
        operador = operadores_dict[nome]
        velocidade = int(operador['Speed'])
        blindagem = int(operador['Armor'])
        velocidades.append(velocidade)
        blindagens.append(blindagem)
        
        print(f"\nOperador: {operador['Name']}")
        print(f"Velocidade: {velocidade}")
        print(f"Blindagem: {blindagem}")

    media_velocidade = sum(velocidades) / len(velocidades)
    media_blindagem = sum(blindagens) / len(blindagens)

    print("\n--- COMPARAÇÃO ---")
    print(f"Média de Velocidade: {media_velocidade:.2f}")
    print(f"Média de Blindagem: {media_blindagem:.2f}")

    print("-" * 50)
    input("\nPressione ENTER para continuar...")

def pesquisar_armas():
    titulo("Pesquisa de Armas")

    tipo = input("Tipo da arma: ").strip()
    try:
        municao = int(input("Capacidade MÁXIMA de munição: ").strip())
    except ValueError:
        print("Por favor, digite um número válido para a munição.")
        return

    resultados = [
        arma for arma in weapons
        if arma['Type'].lower() == tipo.lower() and int(arma['Magazine']) <= municao
    ]

    if not resultados:
        print("Nenhuma arma encontrada com esses critérios.")
    else:
        print(f"{'Arma':20s} {'Tipo':15s} {'Capacidade'}")
        print("-" * 40)
        for arma in resultados:
            print(f"{arma['Name']:20s} {arma['Type']:15s} {arma['Magazine']}")
    input("\nPressione ENTER para continuar...")


def analisar_supressor():
    titulo("Análise de Armas com Supressor")

    com_supressor = set([arma['Name'] for arma in weapons if arma['Suppressor'].lower() == 'y'])
    sem_supressor = set([arma['Name'] for arma in weapons if arma['Suppressor'].lower() == 'n'])

    todas = com_supressor.union(sem_supressor)
    intersecao = com_supressor.intersection(sem_supressor)
    diferenca = todas.difference(com_supressor)

    print(f"\nTotal de armas COM supressor: {len(com_supressor)}")
    if com_supressor:
        print(f"Exemplo: {', '.join(list(com_supressor)[:5])}")

    print(f"\nTotal de armas SEM supressor: {len(sem_supressor)}")
    if sem_supressor:
        print(f"Exemplo: {', '.join(list(sem_supressor)[:5])}")

    print(f"\nTotal de TODAS as armas analisadas: {len(todas)}")

    if intersecao:
        print(f"\nInterseção (armas marcadas como com e sem supressor): {len(intersecao)}")
        print(f"Exemplo: {', '.join(list(intersecao)[:5])}")
    else:
        print("\nNão há interseção: nenhuma arma foi marcada como tendo e não tendo supressor ao mesmo tempo.")

    print(f"\nArmas que NÃO possuem supressor (diferença): {len(diferenca)}")
    if diferenca:
        print(f"Exemplo: {', '.join(list(diferenca)[:5])}")

    input("\nPressione ENTER para continuar...")

def listar_armas_do_operador():
    titulo("Listar Armas e Gadgets de um Operador")
    
    operadores_dict = {operador['Name'].lower(): operador for operador in operators}
    
    while True:
        nome_operador = input("Nome do Operador: ").strip().lower()
        
        if nome_operador not in operadores_dict:
            print("Operador não encontrado. Tente novamente.\n")
            continue
        break

    operador = operadores_dict[nome_operador]
    
    armas_primarias = [operador.get('Primary1'), operador.get('Primary2'), operador.get('Primary3')]
    armas_secundarias = [operador.get('Secondary1'), operador.get('Secondary2')]
    gadgets = [operador.get('Gadget1'), operador.get('Gadget2')]

    armas_primarias = [arma for arma in armas_primarias if arma]
    armas_secundarias = [arma for arma in armas_secundarias if arma]
    gadgets = [gadget for gadget in gadgets if gadget]

    print(f"\nOperador: {operador['Name']}")
    print(f"Armas Primárias: {', '.join(armas_primarias) if armas_primarias else 'Nenhuma'}")
    print(f"Armas Secundárias: {', '.join(armas_secundarias) if armas_secundarias else 'Nenhuma'}")
    print(f"Gadgets: {', '.join(gadgets) if gadgets else 'Nenhum gadget'}")
    print("-" * 40)
    input("\nPressione ENTER para continuar...")

while True:
    titulo("Rainbow Six: Análise de Operadores e Armas")
    print("1. Agrupar armas por tipo")
    print("2. Listar armas mais letais")
    print("3. Comparar operadores")
    print("4. Pesquisar armas")
    print("5. Analisar supressor")
    print("6. Listar armas e gadgets de um operador")
    print("7. Sair")

    try:
        opcao = int(input("Escolha uma opção: "))
    except ValueError:
        print("Por favor, digite um número válido.")
        continue

    if opcao == 1:
        agrupar_armas_por_tipo()
    elif opcao == 2:
        armas_mais_letais()
    elif opcao == 3:
        comparar_operadores()
    elif opcao == 4:
        pesquisar_armas()
    elif opcao == 5:
        analisar_supressor()
    elif opcao == 6:
        listar_armas_do_operador()
    elif opcao == 7:
        print("Saindo... Até a próxima!")
        break
    else:
        print("Opção inválida, tente novamente.")
