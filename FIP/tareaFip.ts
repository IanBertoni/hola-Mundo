import * as rls from 'readline-sync';

function calcularFactorial(): void {
  // se le pide al usuario que meta un numero
  let calcular: number = rls.questionInt('Ingresa un numero: ');

  // inicializo la variable en 1
  let factorial: number = 1;

  // hacemos el recorrido desde el 2 hasta el numero ingresado
  for (let i: number = 2; i <= calcular; i++) {
    factorial *= i;
  }

  // Mostramos el resultado del factorial
  console.log(`El factorial de ${calcular} es: ${factorial}`);
}

// y aca llamamos a la funcion recien creada
calcularFactorial();