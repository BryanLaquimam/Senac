x = 10
y = 20
numeros = [1, 2]

def teste():
    # cria uma nova variavel "x" que só existe dentro da função
    x = 5
    print(x)
    global y
    y = 15
    print(y)
    numeros.append(3)
        
teste()
print(x)       # Qual valor desta variavel "x" ? R= 10
print(y)
