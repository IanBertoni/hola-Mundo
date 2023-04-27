import * as readlineSync from 'readline-sync';

//  preguntar cuántos números desea poner el usuario.
const n = readlineSync.questionInt("Ingrese la cantidad de numeros que quiera: ");

// Pedimos que ingresen los numeros y los guardamos en el array.
const numeros: number[] = [];
for (let i = 0; i < n; i++) {
  const numero = readlineSync.questionInt(`Ingrese el número ${i + 1}: `);
  numeros.push(numero);  // .push es un método  que se usa para agregar elementos al final de un arreglo.

}

let cantPositivos = 0;
let cantNegativos = 0;
let cantCeros = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    cantPositivos++;
  } else if (numeros[i] < 0) {
    cantNegativos++;
  } else {
    cantCeros++;
  }
}

console.log(`En el arreglo hay ${cantPositivos} números positivos, ${cantNegativos} números negativos y ${cantCeros} ceros.`);
