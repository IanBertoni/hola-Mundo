//Declaracion Funcion de tipo Expresion
let sumar = function (a = 4, b = 5) {
  console.log(arguments[0]); // undefined
  console.log(arguments[1]); // undefined
  console.log(arguments[2]);

  return a + b;
};

let resultado = sumar(); // debido a que no le damos argumentos aqui, Arguments[0], [1] da undefined, pero como puse unos valores default, el resultado da 9 y no undefined, si le pasamos nuevos argumentos, los default no los tomara en cuenta y usara los que les pase el usuario al llamar la funcion.
console.log(resultado);

console.log(typeof sumar);

//Es lo mismo que la funcion "Sumar" pero en una funcion flecha, el return se omite porque esta implicito en la funcion
// Esta es una función de flecha que suma dos números.
// 'a' y 'b' son parámetros que representan los números que se sumarán.
const sumarFuncionTipoFlecha = (a, b) => a + b;
/* Una vez que llamamos a la función "sumarFuncionTipoFlecha",
los parámetros 'a' y 'b' se transforman en argumentos,
que son los datos que se pasan a la función para que los procese. */
console.log(sumarFuncionTipoFlecha(2, 4));
