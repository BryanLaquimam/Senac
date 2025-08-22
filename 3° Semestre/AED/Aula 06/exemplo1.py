numeros = [5, 12, 20, 31, 50, 55]
print(numeros)

dobros = [num*2 for num in numeros]
print(dobros)

pares = [num for num in numeros if num % 2 == 0]
print(pares)

# pares = []
# for num in numeros:
#     if num % 2 == 0:
#         pares.append(num)

imp_convertidos_par = [num+1 for num in numeros if num % 2 == 1]
print(imp_convertidos_par)