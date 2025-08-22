'''
    Exemplos de Entrada e Saida de Dados
    Condições simples e compostas
'''

# Entrada de Dados
nome = input("Nome do Aluno: ")
idade = int(input("Idade: "))
salario = float(input("Salario R$: "))

# Saida de Dados
print("-------------------------------")
print(f"Seu nome é: {nome}")
print(f"Sua idade é: {idade}")
print(f"Seu Atual Salario é R$:{salario:9.2f}")

# Condições simples
if idade >= 18:
    print("Você é MAIOR de idade")
else:
    print("Você é menor de idade")
    
print("===============================")    

# Obs.: A identação define os blocos em Python

# Condições compostas
if salario <= 2000:
    print("Salario Inicial")
elif salario <= 5000:
    print("Salario Pleno")
else:
    print("Salario Senior")
    
bairro = input("Bairro: ").upper()

match bairro:
    case "CENTRO":
        print("Você mora aqui por perto")
    case "FRAGATA" | "TRÊS VENDAS":
        print("Ainda é perto")
    case "LARANJAL":
        print("Você mora longe")
    case _:
        print("Não sei responder...")