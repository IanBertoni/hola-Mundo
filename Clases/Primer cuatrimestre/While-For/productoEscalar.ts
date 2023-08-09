import * as rls from 'readline-sync'

const n : number = rls.questionInt("Ingrese la cantidad de numeros: ");

let array1 : number[] = [];
let array2 : number[] = [];

// valores por cada arreglo
for (let i:number = 0;i < n; i++){
array1[i] = rls.questionInt(`ingresa el valor de ${i+1} para el array 1: `);
array2[i] = rls.questionInt(`ingresa el valor de ${i+1} para el array 2: `);
}

// calcular el producto 

let productoEscalar : number = 0;
for (let i: number = 0;i < n; i++){
    productoEscalar += array1[i] * array2[i];  // Sumar el resultado de la multiplicación a la variable "productoEscalar"
}

console.log(`el resultado es ${productoEscalar}`);