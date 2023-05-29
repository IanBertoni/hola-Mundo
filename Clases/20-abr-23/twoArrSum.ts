import * as r from "readline-sync";
/* Sumar dos arreglos (sin funciones)
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.
*/

let arr1: number[] = new Array(6);
let arr2: number[] = new Array(6);
let arr3: number[] = new Array(6);
//cargo arreglo 1
for (let i: number = 0; i < arr1.length; i++) {
  console.clear();
  arr1[i] = r.questionInt(`Input number in position ${i + 1}: `);
}
//cargo arreglo 2
for (let i: number = 0; i < arr2.length; i++) {
  console.clear();
  arr2[i] = r.questionInt(`Input number in position ${i + 1}: `);
}
//sumo y muestro los valores
for (let i: number = 0; i < arr3.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);


