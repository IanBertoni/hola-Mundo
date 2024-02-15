import { log } from "console";

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

(function (a, b) {
  console.log(`Ejecutando la suma de la funcion anonima: ${a + b} `);
})(3, 5);

console.log(typeof miFuncion);

//Declaro la funcion
//con arguments.lenght puedo saber cuando argumentos acepta la funcion a usar.
// arguments se puede usar solo adentro de una funcion
function miFuncion(a: number, b: number) {
  console.log(arguments.length);
  return a + b;
}

// creo una variable nueva y en ella guardo la version de MiFuncion pero en "String" osea que todo lo convierte en una cadena de texto
var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);
