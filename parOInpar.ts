import readlineSync from 'readline-sync';

// Le pedimos al usuario que ingrese un número
const num = readlineSync.questionInt('Ingrese un número: ');

// Si el número es 0, informamos que es 0 y salimos del programa
if (num === 0) {
  console.log('El número ingresado es 0');
  process.exit(0);
}

// Utilizamos el operador % para determinar si el número es par o impar
// Si el resto de la división por 2 es 0, entonces es par, de lo contrario es impar
if (num % 2 === 0) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}
