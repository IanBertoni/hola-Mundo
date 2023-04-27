import * as r from "readline-sync";


/* Sumar dos arreglos (con funciones)
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.
*/

let arr1: number[] = new Array(6);
let arr2: number[] = new Array(6);




function cargarArrNum(arr: number[]): void {
  if (!arr.length) return;
  console.log('Inicia carga de arreglo');
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = r.questionInt(`Input number in position ${i + 1}: `);
  }
  console.log('Arreglo cargado');
  console.log(arr);
}


function twoArrSum(arrA: number[], arrB: number[]): number[] {
  if (arrA.length !== arrB.length) return [];
  let resultArr: number[] = new Array(arrA.length);
  for (let i: number = 0; i < arrA.length; i++) {
    resultArr[i] = arrA[i] + arrB[i];
  }
  return resultArr;
}

const result: number[] = twoArrSum(arr1, arr2);
console.log(result);


