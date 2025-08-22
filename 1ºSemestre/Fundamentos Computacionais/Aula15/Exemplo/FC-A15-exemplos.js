const prompt = require("prompt-sync")()

let x = 0;

console.log(`Adição: 2 + 5 => `, 2 + 5)
console.log(`Subtração: 30 - 25 => `, 30 - 25)
console.log(`Multiplicação: 2 * 8 => `, 2 * 8)
console.log(`Divisão: 10 / 4 => `, 10 / 4)
console.log(`Resto: 8 % 3 => `, 8 % 3)

x = 3;
x = x + 4;
console.log(`Atribuição de Adição: x = 3; x = x + 4; =>`, x)

x = 3;
x += 4;
console.log(`Atribuição de Adição: x = 3; x += 4; =>`, x)

x = 6; 
x = x - 2;
console.log(`Atribuição de Subtração: x = 6; x = x - 2; =>`, x)

x = 6; 
x -= 2;
console.log(`Atribuição de Subtração: x = 6; x -= 2; =>`, x)

x = 2; 
x = x * 3;
console.log(`Atribuição de Multiplicação: x = 2; x = x * 3; =>`, x)

x = 2; 
x *= 3;
console.log(`Atribuição de Multiplicação: x = 2; x *= 3; =>`, x)

x = 10; 
x = x / 5;
console.log(`Atribuição de Divisão: x = 10; x = x / 5; =>`, x)

x = 10; 
x /= 5;
console.log(`Atribuição de Divisão: x = 10; x /= 5; =>`, x)

console.log(`Igualdade Estrita:  5 === 2 + 4 => `, 5 === 2 + 4)

console.log(`Igualdade Estrita:  7 === 2 + 5 => `, 7 === 2 + 5)

console.log(`NÃO Igualdade Estrita:  5 !== 2 + 3 => `, 5 !== 2 + 3)
console.log(`NÃO Igualdade Estrita:  5 !== 2 + 4 => `, 5 !== 2 + 4)

console.log(`Menor que: 6 < 10 => `, 6 < 10)
console.log(`Menor que: 10 < 6 => `, 10 < 6)

console.log(`Maior que: 20 > 10 => `, 20 > 10)
console.log(`Maior que: 10 > 20 => `, 10 > 20)

console.log(`Menor ou igual: 2 <= 3 => `, 2 <= 3)
console.log(`Menor ou igual: 3 <= 2 => `, 3 <= 2)

console.log(`Maior ou igual: 5 >= 4 => `, 5 >= 4)
console.log(`Maior ou igual: 4 >= 5 => `, 4 >= 5)

x = 8
console.log(`Igualdade: x == 3 => `, x == 3)
console.log(`Igualdade: x == 8 => `, x == 8)
console.log(`Igualdade: x == "8" => `, x == "8")

console.log(`Igualdade Estrita: x === 3 => `, x === 3)
console.log(`Igualdade Estrita: x === 8 => `, x === 8)
console.log(`Igualdade Estrita: x === "8" => `, x === "8")

console.log(`true == "true"`, true == "true") 
console.log(`true === "true"`, true === "true")

console.log(`true == true`, true == true)	
console.log(`true === true`, true === true)	

console.log(`true == "1"`, true == "1")	
console.log(`true === "1"`, true === "1")	

console.log(`3 != "3"`, 3 != "3")		
console.log(`3 !== "3"`, 3 !== "3") 

console.log(`3 == "3"`, 3 == "3")	
console.log(`3 === "3"`, 3 === "3") 	
