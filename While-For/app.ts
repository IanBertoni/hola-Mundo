import { log } from "console";
import * as rls from "readline-sync";
// const monthNumber: number = rls.questionInt("número de mes (solo del 1 al 12): ");

// switch (monthNumber) {
//   case 1: log("enero");
//     break;
//   case 2: log("febrero");
//     break;
//   case 3: log("marzo");
//     break;
//   case 4: log("abril");
//     break;
//   case 5: log("mayo");
//     break;
//   case 6: log("junio");
//     break;
//   case 7: log("july");
//     break;
//   case 8: log("agosto");
//     break;
//   case 9: log("septiembre");
//     break;
//   case 10: log("octubre");
//     break;
//   case 11: log("noviembre");
//     break;
//   case 12: log("diciembre");
//     break;
//   default:
//     log("pusiste cualca bro");
// }

// const names: string[] = ["Enzo", "Virginia", "Seba", "Nico", "Nacho"];
// console.log(names[2]);
// console.log(names[names.length - 1]);

// const months: string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// const monthNumber: number = rls.questionInt("número de mes (solo del 1 al 12): ");
// log(months[monthNumber - 1]);

// const num: number[] = new Array(7);
// num[0] = 20;
// num[1] = 14;
// num[2] = 8;
// num[3] = 0;
// num[4] = 5;
// num[5] = 19;
// num[6] = 24;

// function showArrElements(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     log(arr[i]);
//   }
// }
// showArrElements(num);

/*
Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee.

Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas ingresadas por el usuario.
*/

const arrDim: number = rls.questionInt("dimensión del arreglo ?");
let namesArr: string[] = new Array(arrDim);
for (let i = 0; i < namesArr.length; i++) {
  namesArr[i] = rls.question("nombre... ");
}


// Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario. 
// Al final debe imprimir los valores por consola.

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);

for (let i = 0; i < nombres.length; i++) {
  nombres[i] = rls.question("nombre...");
}
for (let i = 0; i < numeros.length; i++) {
  numeros[i] = rls.questionInt("número...");
}

console.log(nombres, numeros);






