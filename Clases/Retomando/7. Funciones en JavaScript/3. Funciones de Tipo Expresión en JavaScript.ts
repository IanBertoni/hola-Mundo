import { log } from "console";

//Declaro la funcion
function miFuncion(a: number, b: number) {
  return a + b;
}

// Puedo llamar a la funcion en donde yo quiera una vez la tenga declarada

let resultado = miFuncion(42, 22);

console.log(resultado);

//Declaracion Funcion de tipo Expresion
let sumar = function (a, b) {
  return a + b;
};

resultado = sumar(1, 2);

console.log(resultado);

console.log(typeof sumar);
