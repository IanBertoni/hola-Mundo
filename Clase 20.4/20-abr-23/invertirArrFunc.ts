import * as r from 'readline-sync';
const dim: number = r.questionInt("Dimension del vector: ");
let numsArr: number[] = new Array(dim);//non primitive type

let base: number = 0;//primitive number, string, boolean, undefined, symbol, null



//paso por valor o referencia js 

function cargarArrNum(arr: number[]): void {
  if (!arr.length) return;
  console.log('Inicia carga de arreglo');
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = r.questionInt(`Input number in position ${i + 1}: `);
  }
  console.log('Arreglo cargado');
}

function printArr(arr: any[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}
function printArrReversed(arr: any[]): void {
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log(arr[index]);
  }
}

cargarArrNum(numsArr);
const namesArr: string[] = ["Marce", "Lito", "Eduar", "Dito"];
printArr(numsArr);
printArr(namesArr);
printArrReversed(numsArr);
printArrReversed(namesArr);
