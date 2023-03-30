import * as rls from "readline-sync";
let nombre: string = "";

nombre = rls.question("ingrese su nombre:");
console.log("usted ingreso", nombre);

let num1: number = 0;
let num2: number = 0;

num1 = rls.questionInt("ingrese el primer numero:");
num2 = rls.questionInt("ingrese el segundo numero:");

console.log("el resultado de la suma es", num1 + num2);
