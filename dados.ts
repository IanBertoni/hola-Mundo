import * as rls from 'readline-sync';

// Declaración de variables
let n: number;
let probabilidad: string = "1/6 chances"; // Inicializamos la variable probabilidad con el valor "1/6 chances"
let resultado: number = 1;

// Pedimos al usuario que ingrese el número de dados a tirar
n = rls.questionInt("Ingrese el numero de dados a tirar: ");

// Cálculo de la probabilidad de sacar todos los dados 6
for (let i = 1; i <= n; i++) {
    probabilidad = `1/${6 ** i} chances`; // Use la potencia (**) para calcular la probabilidad de sacar todos los dados 6. La variable "probabilidad" es actualizada con el valor de la probabilidad actual en cada iteración.
    resultado *= 1/6; // Usamos el operador compuesto *= para multiplicar el resultado actual por la probabilidad de sacar un dado 6.
}

// Mostramos el resultado al usuario
console.log(`La probabilidad de sacar todos los dados 6 es ${probabilidad}`); 
