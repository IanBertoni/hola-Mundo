import { log } from "console";

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(a, b, c, d, e) {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}
