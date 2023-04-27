import * as r from 'readline-sync';

/*Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/


const dim: number = r.questionInt("Dimension del vector: ");
let numsArr: number[] = new Array(dim);
for (let i: number = 0; i < numsArr.length; i++) {
  numsArr[i] = r.questionInt("Gimme a number dude: ");
}
for (let i: number = numsArr.length - 1; i >= 0; i--) {
  console.log(numsArr[i]);
}