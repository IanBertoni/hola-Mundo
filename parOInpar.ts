import * as rls from 'readline-sync';

let num = 0; // Inicializamos la variable num con 0

while (num === 0) { // Mientras num sea igual a 0, pedimos al usuario que ingrese un número distinto de 0
  num = rls.questionInt('Por favor ingrese un número distinto de 0: ');
}

if (num % 2 === 0) { // Si el número es par
  console.log(`El número ${num} es par`);
} else { // Si el número es impar
  console.log(`El número ${num} es impar`);
}