import * as readlineSync from 'readline-sync';

// Función que cuenta los numeros positivos, negativos y ceros en un arreglo.
function contarNumeros(arr: number[]): void {
  let cantPositivos = 0;
  let cantNegativos = 0;
  let cantCeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      cantPositivos++;
    } else if (arr[i] < 0) {
      cantNegativos++;
    } else {
      cantCeros++;
    }
  }

  console.log(`En el arreglo hay ${cantPositivos} números positivos, ${cantNegativos} números negativos y ${cantCeros} ceros.`);
}

// Se le solicita al usuario que especifique cuántos números quiere ingresar.
const n = readlineSync.questionInt("Ingrese la cantidad de numeros que quiere ingresar: ");

// Pedimos al usuario que ingrese los números y los almacenamos en un arreglo
const numeros: number[] = [];
for (let i = 0; i < n; i++) {
  const numero = readlineSync.questionInt(`Ingrese el numero ${i + 1}: `);
  numeros.push(numero);
}

// Llamamos a la funcion para contar los numeros positivos, negativos y ceros en el arreglo
contarNumeros(numeros);

                                                    