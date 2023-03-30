import * as readlineSync from 'readline-sync';

// Le pedimos al usuario que ingrese los tres números
const num1 = readlineSync.questionInt('Ingrese el primer número: ');
const num2 = readlineSync.questionInt('Ingrese el segundo número: ');
const num3 = readlineSync.questionInt('Ingrese el tercer número: ');

// Comparamos los tres números para determinar cuál es el mayor
let mayor: number; // Declaramos una variable para almacenar el mayor número
switch (true) { // Evaluamos una expresión que siempre es verdadera
  case num1 >= num2 && num1 >= num3: // Si num1 es mayor o igual que num2 y num3
    mayor = num1;
    break;
  case num2 >= num1 && num2 >= num3: // Si num2 es mayor o igual que num1 y num3
    mayor = num2;
    break;
  default: // En cualquier otro caso (es decir, si num3 es mayor que num1 y num2)
    mayor = num3;
    break;
}

// Mostramos el resultado al usuario
console.log(`El número mayor es: ${mayor}`);
