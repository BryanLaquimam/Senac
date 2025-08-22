clientes = [
    {"nome": "Carlos Santos", "idade": 30},
    {"nome": "Pedro Cardoso", "idade": 25},
    {"nome": "Maria Nóbrega", "idade": 48},
    {"nome": "Andreia de Mattos", "idade": 33},
    {"nome": "Simone Silva", "idade": 21}
]

# Para acrescentar, utiliza-se os metodos das listas
clientes.append({"nome": "Bianca da Costa", "idade": 41})

# exibir um elemento
print(clientes[0])

# exibir um atributo de um elemento
print(clientes[0]["nome"])

# formas de percorrer todos os elementos da lista
for cliente in clientes:
    print(cliente["nome"])
    
print("="*40)
# formas de percorrer todos os elementos da lista
for num, cliente in enumerate(clientes, start=1):
    print(f"{num}º Cliente: {cliente["nome"]}")
    
# ------------------------- Filtos em listas de dicionarios
print("*"*40)
# formas de percorrer todos os elementos da lista
for num, cliente in enumerate(clientes, start=1):
    if cliente["idade"] >= 30:
        print(f"{num}º Cliente: {cliente["nome"]} - {cliente["idade"]}")
    
# ---------------- Filtros com List Comprehensions
clientes2 = [x for x in clientes if x["idade"] < 30]

print("&"*40)
# formas de percorrer todos os elementos da lista
for num, cliente in enumerate(clientes2, start=1):
    print(f"{num}º Cliente: {cliente["nome"]} - {cliente["idade"]} anos") 
    
# Classificar/ordenar a lista
# função anonima no python são criadas a partir da palavra-chave lambda
# (equivalente às arrow functions do JavaScript: () => {})
clientes3 = sorted(clientes, key=lambda cliente: cliente["nome"])

print("#"*40)
for num, cliente in enumerate(clientes3, start=1):
    print(f"{num}º Cliente: {cliente["nome"]} - {cliente["idade"]} anos") 
    
# Ordem decrescente: recerse=True
clientes4 = sorted(clientes, key=lambda cliente: cliente["idade"], reverse=True)

print("#"*40)
for num, cliente in enumerate(clientes4, start=1):
    print(f"{num}º Cliente: {cliente["nome"]} - {cliente["idade"]} anos") 
    
# --------------------------------------
# Calcular e exibir a média das idades (usando List Comprehensions e sum)
media = sum([x["idade"] for x in clientes]) / len(clientes)
print(f"Média das Idades: {media:4.1f}")